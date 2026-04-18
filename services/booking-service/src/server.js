require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
const { connectProducer } = require("./config/kafka");

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.sync();
    await connectProducer();

    app.listen(PORT, () => {
      console.log(`Booking Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
