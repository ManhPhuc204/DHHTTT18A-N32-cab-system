const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: DataTypes.UUID,
  pickup: DataTypes.STRING,
  dropoff: DataTypes.STRING,
  status: DataTypes.STRING,
  price: DataTypes.FLOAT,
});

module.exports = Booking;
