const { consumer } = require("../../config/kafka");
const rideService = require("../../services/ride.service");

const runBookingConsumer = async () => {
  await consumer.subscribe({ topic: "booking.created" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const booking = JSON.parse(message.value.toString());

      await rideService.handleBookingCreated(booking);
    },
  });
};

module.exports = runBookingConsumer;
