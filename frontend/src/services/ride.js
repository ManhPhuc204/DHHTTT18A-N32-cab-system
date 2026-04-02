// src/services/ride.js

const FAKE_DRIVERS = [
    { id: 1, name: "Nguyễn Văn A", vehicle: "Honda Vision", plate: "59-C1 123.45", rating: 4.8 },
    { id: 2, name: "Trần Tốc Độ", vehicle: "Yamaha Exciter", plate: "29-H1 999.99", rating: 5.0 },
    { id: 3, name: "Lê Thị B", vehicle: "Toyota Vios", plate: "51G-567.89", rating: 4.9 },
    { id: 4, name: "Phạm Văn C", vehicle: "VinFast Fadil", plate: "30F-555.66", rating: 4.7 },
];

export const findDriverAPI = ({ type, user }) => {
    return new Promise((resolve, reject) => {
        console.log(`Đang tìm xe loại: ${type} cho khách: ${user.name}`);

        setTimeout(() => {
            // 1. Random khoảng cách (từ 2km đến 15km)
            // Vì chưa có Map thật nên mình giả vờ random
            const distanceKM = Math.floor(Math.random() * 13) + 2;

            // 2. Tính giá tiền theo loại xe
            let pricePerKM = type === 'bike' ? 5000 : 12000; // Xe máy 5k/km, Ô tô 12k/km
            const totalPrice = distanceKM * pricePerKM;

            // 3. Format tiền (Ví dụ: 45000 -> "45.000đ")
            const formattedPrice = totalPrice.toLocaleString('vi-VN') + "đ";

            // 4. Chọn tài xế ngẫu nhiên
            const randomDriver = FAKE_DRIVERS[Math.floor(Math.random() * FAKE_DRIVERS.length)];

            // 5. Trả về thông tin đầy đủ (Gồm cả giá và khoảng cách vừa tính)
            resolve({
                ...randomDriver,
                distance: `${distanceKM} km`,
                price: formattedPrice,     // Giá hiển thị
                priceRaw: totalPrice,      // Giá số (để cộng trừ nếu cần)
                type: type                 // Loại xe
            });

        }, 2500); // Giả lập độ trễ 2.5 giây
    });
};