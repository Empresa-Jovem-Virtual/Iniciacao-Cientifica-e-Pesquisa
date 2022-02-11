import { Router } from 'express'
import user from '@routes/api/user'

// Export the base-router
const router = Router()

// Setup routers
router.use('/users', user)

// Export default.
export default router
