require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const { connectKafka } = require("./config/kafka");
const runBookingConsumer = require("./events/consumers/booking.consumer");

const PORT = process.env.PORT || 3002;

(async () => {
  try {
    await connectDB();
    await connectKafka();
    await runBookingConsumer();

    app.listen(PORT, () => {
      console.log(`Ride Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
