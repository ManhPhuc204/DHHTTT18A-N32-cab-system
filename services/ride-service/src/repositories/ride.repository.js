const Ride = require("../models/ride.model");

exports.create = async (data) => {
  return Ride.create(data);
};

exports.findById = async (id) => {
  return Ride.findOne({ rideId: id });
};

exports.update = async (id, updateData) => {
  return Ride.findOneAndUpdate({ rideId: id }, updateData, { new: true });
};
