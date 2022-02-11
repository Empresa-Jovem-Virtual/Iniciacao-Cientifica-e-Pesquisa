import { Request, Response, Router } from 'express'
import CategoryController from '@app/Http/General/CategoryController'

// Constants
const router = Router()

router.get('/', CategoryController.index)

router.post('/', async (_: Request, res: Response) => res.send('post'))

router.put('/update/:id', async (_: Request, res: Response) => res.send('put'))

router.delete('/delete/:id', async (_: Request, res: Response) => res.send('delete'))

// Export default
export default router

