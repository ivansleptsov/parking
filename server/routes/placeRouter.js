const Router = require('express')
const placeController = require('../controllers/placeController')
const router = new Router()

router.post('/', placeController.create)
router.get('/', placeController.getAll)
router.get('/:id', placeController.getOne)

module.exports = router
