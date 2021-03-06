const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role, phone, firstName, lastName } = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }

    const candidate = await User.findOne({ where: { email } }) // проверяем занят ли емайл
    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует')
      )
    }

    const hashPassword = await bcrypt.hash(password, 5) // хэшируем пароль
    const user = await User.create({
      email,
      role,
      password: hashPassword,
      phone,
      firstName,
      lastName,
    }) // создаем пользователя

    const token = generateJwt(user.id, user.email, user.role)
    return res.json(token)
  }

  async login(req, res, next) {
    const { email, password } = req.body // получаем данные
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден')) // проверка существует ли такой пользователь
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль')) // проверка пароля
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token })
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({ token })
  }
}

module.exports = new UserController()
