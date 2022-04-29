const ApiError = require('../error/ApiError')
const { Park } = require('../models/models')

class ParkController {
  async create(req, res, next) {
    try {
      let { address } = req.body

      const park = await Park.create({
        address,
      })

      return res.json(park)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {}
}
module.exports = new ParkController()
