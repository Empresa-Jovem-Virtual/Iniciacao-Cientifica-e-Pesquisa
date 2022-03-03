// Must be the first import
import './bootstrap'

import logger from 'jet-logger'
import { createConnection } from 'typeorm'

import server from './server'

const port = (process.env.PORT || 8000)

// start server
server.listen(port, async () => {
  logger.info(`Express server started on port: ${port}`)
  await createConnection()
  logger.info(`Database connected`)
})
