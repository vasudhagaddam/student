import { Router } from 'express'

import {
  create,
  index,
  show,
  //update,
  destroy,
  searchStudent
} from './controller'

const router = new Router()

router.post('/',create)

//router.put('/:id',update)

router.get('/search', searchStudent)

router.get('/', index)

router.get('/:id', show)

router.delete('/:id', destroy)


export default router