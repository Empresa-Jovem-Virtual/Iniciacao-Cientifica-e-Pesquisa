import { Request, Response, Router } from 'express'

// Export the base-router
const router = Router()

router.get('/', (request: Request, response: Response) => {
  response.render('index', { title: 'Express' })
})

router.get('/users', (request: Request, response: Response) => {
  response.render('user', { title: 'Users' })
})

router.get('/categories', (request: Request, response: Response) => {
  response.render('category', { title: 'Categories' })
})

// Export default.
export default router
