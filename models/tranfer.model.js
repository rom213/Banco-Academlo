const { DataTypes } = require('sequelize');
const { db } = require('../dataBase/config');

const Transfer = db.define('transfer', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  senderUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reseiverUserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Transfer;