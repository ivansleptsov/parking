const Router = require('express')
const parkController = require('../controllers/parkController')
const router = new Router()

router.post('/', parkController.create)
router.get('/', parkController.getAll)

module.exports = router
