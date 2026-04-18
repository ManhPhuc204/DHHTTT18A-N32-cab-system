const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "ride-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: "ride-group" });
const producer = kafka.producer();

const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
};

module.exports = { consumer, producer, connectKafka };
