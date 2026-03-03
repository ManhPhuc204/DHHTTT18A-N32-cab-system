export async function ensurePaymentTable(pool) {
    await pool.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
    await pool.query(`
        CREATE TABLE IF NOT EXISTS payments (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            booking_id UUID NOT NULL,
            user_id UUID NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            payment_method VARCHAR(50) NOT NULL, -- e.g., 'credit_card', 'cash', 'wallet'
            status VARCHAR(20) NOT NULL DEFAULT 'pending', -- e.g., 'pending', 'completed', 'failed'
            transaction_id VARCHAR(255), -- From payment gateway
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ
        );
    `);
}