import { Router } from 'express'
import UserRoutes from '../../../modules/User/infra/http/routes/user.routes'

const router = Router()

router.use('/users', UserRoutes)


export default router
