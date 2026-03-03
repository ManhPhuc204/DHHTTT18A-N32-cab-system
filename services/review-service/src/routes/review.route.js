const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller.js');

// POST a new review
router.post('/', reviewController.createReview);

// GET all reviews for a specific driver
router.get('/driver/:driverId', reviewController.getDriverReviews);

module.exports = router;