import { Request, Response, Router } from 'express'
import user from '@routes/api/user'
import category from '@routes/api/category'

// Export the base-router
const router = Router()

const routes = [...user, ...category]

routes.forEach((route) => {
  (router as any)[route.method](route.route, (request: Request, response: Response, next: Function) => {
    const result = (new (route.controller as any))[route.action](request, response, next)
    if (result instanceof Promise) {
      result.then((result) => {
        if (result !== null && result !== undefined) {
          return response.jsend.success(result)
        }
        return undefined
      })
      return
    }

    if (result !== null && result !== undefined) {
      response.jsend.success(result)
    }
  })
})

// Export default.
export default router
