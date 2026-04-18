const rideService = require("../services/ride.service");

exports.start = async (req, res) => {
  const ride = await rideService.startRide(req.body.rideId);
  res.json({ success: true, data: ride });
};

exports.end = async (req, res) => {
  const ride = await rideService.endRide(req.body.rideId);
  res.json({ success: true, data: ride });
};

exports.get = async (req, res) => {
  const ride = await rideService.getRide(req.params.id);
  res.json({ success: true, data: ride });
};
