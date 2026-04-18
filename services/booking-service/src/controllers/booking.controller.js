const bookingService = require("../services/booking.service");

exports.create = async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.get = async (req, res) => {
  const booking = await bookingService.getBooking(req.params.id);
  res.json({ success: true, data: booking });
};

exports.cancel = async (req, res) => {
  const booking = await bookingService.cancelBooking(req.params.id);
  res.json({ success: true, data: booking });
};
