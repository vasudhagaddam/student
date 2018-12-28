import { Router } from 'express'

import {
  create,
  showmarks,
  index,
  show,
  update,
  destroy
} from './controller'

const router = new Router()

router.post('/',create)

router.get('/details',showmarks)

router.get('/', index)

router.put('/:id',update)

router.get('/:id', show)

router.delete('/:id', destroy)

export default router
