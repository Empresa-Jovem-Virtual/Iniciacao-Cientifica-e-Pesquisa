import { Router } from 'express'
import user from '@routes/api/user'
import category from '@routes/api/category'

// Export the base-router
const router = Router()

// Setup routers
router.use('/users', user)
router.use('/categories', category)

// Export default.
export default router
