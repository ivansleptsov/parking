const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const placeRouter = require('./placeRouter')
const parkRouter = require('./parkRouter')
const bookingRouter = require('./bookingRouter')
const undateRouter = require('./undateRouter')

router.use('/user', userRouter)
router.use('/place', placeRouter)
router.use('/park', parkRouter)
router.use('/booking', bookingRouter)
router.use('/undates', undatesRouter)

module.exports = router
