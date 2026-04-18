const { producer } = require("../../config/kafka");

const { producer } = require("../../config/kafka");

exports.emitRideAssigned = async (ride) => {
  await producer.send({
    topic: "ride.assigned",
    messages: [{ value: JSON.stringify(ride) }],
  });
};

exports.emitRideStarted = async (ride) => {
  await producer.send({
    topic: "ride.started",
    messages: [{ value: JSON.stringify(ride) }],
  });
};

exports.emitRideCompleted = async (ride) => {
  await producer.send({
    topic: "ride.completed",
    messages: [{ value: JSON.stringify(ride) }],
  });
};
