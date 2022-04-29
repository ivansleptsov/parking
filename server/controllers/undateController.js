const ApiError = require('../error/ApiError')
const { Undate } = require('../models/models')

class UndateController {
  async create(req, res, next) {
    try {
      let { placeId, dateStart, dateEnd } = req.body

      const undate = await Device.create({
        placeId,
        dateStart,
        dateEnd,
      })

      return res.json(undate)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {}
}
module.exports = new UndatesController()
