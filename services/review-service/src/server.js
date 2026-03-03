const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const reviewRoutes = require('./routes/review.route.js');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'review-service' });
});

// API Routes
app.use('/api/reviews', reviewRoutes);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`Review service is running on port ${PORT}`);
});