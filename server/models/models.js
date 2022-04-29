const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  phone: { type: DataType.STRING, unique: true, allowNull: false },
  firstName: { type: DataType.STRING, allowNull: false },
  lastName: { type: DataType.STRING, allowNull: false },
})

const Place = sequelize.define('place', {
  id: { type: DataType.INTEGER, unique: true, autoIncrement: true }, // ID парковочного места
  parkId: { type: DataType.INTEGER, allowNull: false, primaryKey: true }, // ID паркинга
  number: { type: DataType.INTEGER, allowNull: false, primaryKey: true }, // номер парковочного места
  userId: { type: DataType.INTEGER, allowNull: false }, // ID владельца
  description: { type: DataType.STRING, allowNull: true }, // описанием места
  price: { type: DataTypes.INTEGER, allowNull: false }, // цена за ночь
  activeStatus: {
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }, // статус активации аренды
})

const Park = sequelize.define('park', {
  id: {
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  address: { type: DataType.STRING, unique: true, allowNull: false },
})

const Booking = sequelize.define('booking', {
  id: {
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  renterUserId: { type: DataType.INTEGER, allowNull: false },
  holderUserId: { type: DataType.INTEGER, allowNull: false },
  placeId: { type: DataType.INTEGER, allowNull: false },
  dateStart: { type: DataType.DATE, allowNull: false },
  dateEnd: { type: DataType.DATE, allowNull: false },
  price: { type: DataType.INTEGER, allowNull: false },
})
const Undate = sequelize
  .define('undate', {
    id: {
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    placeId: { type: DataType.INTEGER, allowNull: false },
    dateStart: { type: DataType.DATE, allowNull: false },
    dateEnd: { type: DataType.DATE, allowNull: false },
  })

  .hasMany(Place)
Place.belongsTo().hasMany(Booking)
Booking.belongsTo(User)

Park.hasMany(Place)
Place.belongsTo(Park)

Place.hasOne(Park)
Park.belongsTo(Place)

Place.hasMany(Booking)
Booking.belongsTo(Place)

Undate.hasMany(Place)
Place.belongsTo(Undate)

Place.hasMany()
Undate.belongsTo(Place)

module.exports = {
  User,
  Park,
  Place,
  Booking,
  Undate,
}

// module.exports = {
//   User,
//   Basket,
//   BasketDevice,
//   Device,
//   Type,
//   Brand,
//   Rating,
//   TypeBrand,
//   DeviceInfo,
// }
