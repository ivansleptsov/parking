const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  phone: { type: DataTypes.STRING, unique: true, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
})

const Place = sequelize.define('place', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
  }, // ID парковочного места
  parkId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }, // ID паркинга
  number: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }, // номер парковочного места
  userId: { type: DataTypes.INTEGER, allowNull: false }, // ID владельца
  description: { type: DataTypes.STRING, allowNull: true }, // описанием места
  price: { type: DataTypes.INTEGER }, // цена за ночь
  activeStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

const Park = sequelize.define('park', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  address: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Booking = sequelize.define('booking', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: { type: DataTypes.INTEGER, allowNull: false }, // renter User
  holderUserId: { type: DataTypes.INTEGER, allowNull: false },
  // placeId: { type: DataTypes.INTEGER, allowNull: false },
  dateStart: { type: DataTypes.DATE, allowNull: false },
  dateEnd: { type: DataTypes.DATE, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
})
const Undate = sequelize.define('undate', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  },
  placeId: { type: DataTypes.INTEGER, allowNull: false },
  dateStart: { type: DataTypes.DATE, allowNull: false },
  dateEnd: { type: DataTypes.DATE, allowNull: false },
})

User.hasMany(Place)
Place.belongsTo(User)

User.hasMany(Booking)
Booking.belongsTo(User)

Park.hasMany(Place)
Place.belongsTo(Park)

Place.hasMany(Booking)
Booking.belongsTo(Place)

Place.hasMany(Undate)
Undate.belongsTo(Place)

module.exports = {
  User,
  Park,
  Place,
  Booking,
  Undate,
}
