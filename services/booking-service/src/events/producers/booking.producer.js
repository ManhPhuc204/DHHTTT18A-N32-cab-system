const { producer } = require("../../config/kafka");

exports.emitBookingCreated = async (booking) => {
  await producer.send({
    topic: "booking.created",
    messages: [
      {
        value: JSON.stringify(booking)
      }
    ]
  });
};