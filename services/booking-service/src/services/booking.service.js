const { v4: uuidv4 } = require("uuid");
const bookingRepo = require("../repositories/booking.repository");
const bookingProducer = require("../events/producers/booking.producer");

exports.createBooking = async (data) => {
  const booking = await bookingRepo.create({
    id: uuidv4(),
    userId: data.userId,
    pickup: data.pickup,
    dropoff: data.dropoff,
    status: "PENDING",
    price: data.price || 0,
  });

  await bookingProducer.emitBookingCreated(booking);

  return booking;
};

exports.getBooking = async (id) => {
  return bookingRepo.findById(id);
};

exports.cancelBooking = async (id) => {
  return bookingRepo.updateStatus(id, "CANCELLED");
};

exports.updateStatus = async (id, status) => {
  return bookingRepo.updateStatus(id, status);
};
