import { Router } from 'express'
import CategoryController from '@app/Http/General/CategoryController'

const router = Router()

router.get('/', CategoryController.index)

router.post('/', CategoryController.store)

// router.put('/update/:id', async (_: Request, res: Response) => res.send('put'))

// router.delete('/delete/:id', async (_: Request, res: Response) => res.send('delete'))

// Export default
export default router

