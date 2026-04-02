// Đây là file giả lập API trả về từ Server
export const loginAPI = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 1. Trường hợp là ADMIN
            if (email === "admin@smartcab.com") {
                resolve({
                    id: 1,
                    name: "Admin Dũng",
                    role: "ADMIN",
                    token: "fake-jwt-token-admin"
                });
            }
            // 2. Trường hợp là TÀI XẾ
            else if (email === "driver@smartcab.com") {
                resolve({
                    id: 2,
                    name: "Tài xế Lý Tốc Độ",
                    role: "DRIVER",
                    token: "fake-jwt-token-driver"
                });
            }
            // 3. Trường hợp là KHÁCH (Mặc định)
            else {
                resolve({
                    id: 3,
                    name: "Khách hàng A",
                    role: "CUSTOMER",
                    token: "fake-jwt-token-customer"
                });
            }
        }, 1000); // Giả vờ mạng lag 1 giây cho thật
    });
};