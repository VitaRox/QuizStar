import express from 'express'
import userCtrl from '../controller/userController'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.param('userId', userCtrl.userByID)

module.exports = router