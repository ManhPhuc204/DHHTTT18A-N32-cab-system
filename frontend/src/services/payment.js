// src/services/payment.js

export const processPaymentAPI = (amount) => {
    return new Promise((resolve, reject) => {
        console.log(`Đang kết nối tới ngân hàng... Số tiền: ${amount}`);

        // Giả lập thời gian xử lý giao dịch (2 giây)
        setTimeout(() => {
            // 90% là thanh toán thành công
            const isSuccess = true;

            if (isSuccess) {
                resolve({
                    transactionId: "TRX-" + Math.floor(Math.random() * 1000000),
                    status: "SUCCESS",
                    message: "Giao dịch thành công",
                    time: new Date().toLocaleString()
                });
            } else {
                reject("Số dư không đủ hoặc lỗi ngân hàng.");
            }
        }, 2000);
    });
};