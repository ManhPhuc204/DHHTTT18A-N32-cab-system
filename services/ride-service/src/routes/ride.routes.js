const express = require("express");
const router = express.Router();
const controller = require("../controllers/ride.controller");

router.post("/start", controller.start);
router.post("/end", controller.end);
router.get("/:id", controller.get);

module.exports = router;
