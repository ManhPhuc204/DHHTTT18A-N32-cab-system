const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  rideId: String,
  bookingId: String,
  driverId: String,
  status: String,
  startTime: Date,
  endTime: Date,
});

module.exports = mongoose.model("Ride", rideSchema);
