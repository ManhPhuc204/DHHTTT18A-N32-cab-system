require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
const { connectProducer } = require("./config/kafka");
const runRideConsumer = require("./events/consumers/ride.consumer");
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.sync();
    await connectProducer();
    await runRideConsumer();
    app.listen(PORT, () => {
      console.log(`Booking Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
