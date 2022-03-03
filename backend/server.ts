import path from 'path'

import express, { NextFunction, Request, Response } from 'express'
import StatusCodes from 'http-status-codes'
import logger from 'jet-logger'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import jsend from 'jsend'
import helmet from 'helmet'

import 'express-async-errors'
import 'reflect-metadata'

import apiRouter from './routes/api'
import webRouter from './routes/web'
import { CustomError } from '@app/Shared/errors'

// https://github.com/omniti-labs/jsend

// app
const app = express()

/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(jsend.middleware)

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/

// Add api router
app.use('/api', apiRouter)
app.use('/', webRouter)

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
  logger.err(err, true)
  const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST)
  return res.status(status).json({
    error: err.message,
  })
})

/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set viesw dir
const viewsDir = path.join(__dirname, 'resources', 'views')
app.set('views', viewsDir)
app.set('view engine', 'pug')

// Set static dir
const staticDir = path.join(__dirname, 'public')
app.use(express.static(staticDir))

// error handler
// @ts-ignore
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// Export here and start in a diff file (for testing).
export default app
