const express = require("express");
const bookingRoutes = require("./routes/booking.routes");

const app = express();
app.use(express.json());

app.use("/booking", bookingRoutes);

module.exports = app;
