const { consumer } = require("../../config/kafka");
const bookingService = require("../../services/booking.service");

const runRideConsumer = async () => {
  await consumer.subscribe({ topic: "ride.assigned" });
  await consumer.subscribe({ topic: "ride.started" });
  await consumer.subscribe({ topic: "ride.completed" });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const ride = JSON.parse(message.value.toString());

      switch (topic) {
        case "ride.assigned":
          await bookingService.updateStatus(ride.bookingId, "CONFIRMED");
          break;

        case "ride.started":
          await bookingService.updateStatus(ride.bookingId, "ONGOING");
          break;

        case "ride.completed":
          await bookingService.updateStatus(ride.bookingId, "COMPLETED");
          break;
      }
    },
  });
};

module.exports = runRideConsumer;
