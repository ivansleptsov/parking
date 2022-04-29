const ApiError = require('../error/ApiError')
const { Booking } = require('../models/models')

class BookingController {
  async create(req, res, next) {
    try {
      let { renterUserId, holderUserId, placeId, dateStart, dateEnd, price } =
        req.body

      const booking = await Booking.create({
        renterUserId,
        holderUserId,
        placeId,
        dateStart,
        dateEnd,
        price,
      })

      return res.json(booking)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {}

  async getOne(req, res) {}
}
module.exports = new BookingController()
