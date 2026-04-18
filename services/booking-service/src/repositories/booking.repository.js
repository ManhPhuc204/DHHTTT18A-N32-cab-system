const Booking = require("../models/booking.model");

exports.create = async (data) => {
  return Booking.create(data);
};

exports.findById = async (id) => {
  return Booking.findByPk(id);
};

exports.updateStatus = async (id, status) => {
  const booking = await Booking.findByPk(id);
  if (!booking) return null;
  booking.status = status;
  return booking.save();
};
