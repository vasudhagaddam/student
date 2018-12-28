import { Router } from 'express'

import students from './students'
import subjects from './subjects'
import marks from './marks'

const router = new Router()

router.use('/students', students)
router.use('/subjects', subjects)
router.use('/marks', marks)

export default router
