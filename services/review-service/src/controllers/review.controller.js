const Review = require('../models/review.model.js');

// Create a new review
exports.createReview = async(req, res) => {
    try {
        const { bookingId, userId, driverId, rating, comment } = req.body;

        // Basic validation
        if (!bookingId || !userId || !driverId || !rating) {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

        const newReview = new Review({
            bookingId,
            user: userId,
            driver: driverId,
            rating,
            comment
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error: error.message });
    }
};

// Get all reviews for a specific driver
exports.getDriverReviews = async(req, res) => {
    try {
        const { driverId } = req.params;
        const reviews = await Review.find({ driver: driverId }).populate('user', 'name'); // Populate user's name
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
};