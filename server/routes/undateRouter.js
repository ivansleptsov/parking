const Router = require('express')
const undateController = require('../controllers/undateController')
const router = new Router()

router.post('/', undateController.create)
router.get('/', undateController.getAll)

module.exports = router
