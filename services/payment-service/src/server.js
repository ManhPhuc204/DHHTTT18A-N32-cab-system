import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { createPool } from "./config/database.js";
import { paymentRouter } from "./routes/payment.route.js";
import { ensurePaymentTable } from "./models/payment.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3007;
const pool = createPool();

app.use((req, _res, next) => {
    req.db = pool;
    next();
});

app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "payment-service" });
});

app.use("/api/payments", paymentRouter);

const startServer = async() => {
    try {
        await ensurePaymentTable(pool);
        console.log('"payments" table checked/created successfully.');
        app.listen(PORT, () => {
            console.log(`Payment service listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();