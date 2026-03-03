import { Router } from 'express';

export const paymentRouter = Router();

// Placeholder for payment routes
paymentRouter.get('/', (req, res) => {
    res.json({ message: 'Payment service is working' });
});