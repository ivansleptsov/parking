// const uuid = require('uuid')
// const path = require('path')
const { Place } = require('../models/models')
const ApiError = require('../error/ApiError')

class PlaceController {
  async create(req, res, next) {
    try {
      // let { parkId, number, userId, description, price, activeStatus } =
      //   req.body
      let { number, description, price } = req.body

      const place = await Place.create({
        number,
        description,
        price,
        // userId,
        // parkId,
        // activeStatus,
      })

      // if (info) {
      //   info = JSON.parse(info)
      //   info.forEach((i) =>
      //     DeviceInfo.create({
      //       title: i.title,
      //       description: i.description,
      //       deviceId: device.id,
      //     })
      //   )
      // }
      return res.json(place)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { parkId, userId, limit, page } = req.query
    page = page || 1 // кол-во страниц
    limit = limit || 9 // девайсов на странице
    let offset = page * limit - limit // отступ, скрытие первых 9 позиций на след странице
    let places

    if (!parkId && !userId) {
      places = await Place.findAndCountAll({ limit, offset })
    }
    if (parkId && !userId) {
      places = await Place.findAndCountAll({
        where: { parkId },
        limit,
        offset,
      })
    }
    if (!parkId && userId) {
      places = await Place.findAndCountAll({
        where: { userId },
        limit,
        offset,
      })
    }
    if (parkId && userId) {
      places = await Place.findAndCountAll({
        where: { parkId, userId },
        limit,
        offset,
      })
    }

    return res.json(places)
  }

  async getOne(req, res) {
    const { id } = req.params
    const place = await Place.findOne({
      where: { id },
      // include: [{ model: DeviceInfo, as: 'info' }],
    })
    return res.json(place)
  }
}

module.exports = new PlaceController()
