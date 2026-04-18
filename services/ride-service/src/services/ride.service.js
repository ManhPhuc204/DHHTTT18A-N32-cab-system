const rideProducer = require("../events/producers/ride.producer");

// assign driver
exports.handleBookingCreated = async (booking) => {
  const ride = await rideRepo.create({
    rideId: uuidv4(),
    bookingId: booking.id,
    driverId: "driver_123",
    status: "ACCEPTED",
  });

  await rideProducer.emitRideAssigned(ride);
};

// start ride
exports.startRide = async (rideId) => {
  const ride = await rideRepo.update(rideId, {
    status: "STARTED",
    startTime: new Date(),
  });

  await rideProducer.emitRideStarted(ride);

  return ride;
};

// end ride
exports.endRide = async (rideId) => {
  const ride = await rideRepo.update(rideId, {
    status: "COMPLETED",
    endTime: new Date(),
  });

  await rideProducer.emitRideCompleted(ride);

  return ride;
};
