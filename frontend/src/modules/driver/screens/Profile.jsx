import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

export default function DriverProfile() {
    const navigate = useNavigate();

    // Dữ liệu giả lập
    const driver = {
        name: "Lý Tốc Độ",
        phone: "0909.123.456",
        vehicle: "Honda Winner X",
        plate: "59-P1 123.45",
        rating: 4.9,
        joinDate: "20/10/2023",
        wallet: "2.500.000đ"
    };

    const handleLogout = () => {
        if (window.confirm("Bạn muốn đăng xuất khỏi tài khoản đối tác?")) {
            localStorage.removeItem("user");
            navigate('/partner/login');
        }
    };

    return (
        <div className="h-full overflow-y-auto bg-gray-50 relative pb-10 scrollbar-hide">

            {/* --- HEADER PROFILE --- */}
            <div className="bg-slate-900 text-white p-6 pt-10 rounded-b-[40px] shadow-lg relative overflow-hidden shrink-0">

                {/* 👇 SỬA ĐỔI: Dùng ký tự mũi tên (←) thay vì SVG để đảm bảo hiện màu */}
                {/* 👇 NÚT BACK: TO HƠN, ĐẬM HƠN & MÀU ĐEN 👇 */}
                <button
                    onClick={() => navigate(-1)}
                    // w-12 h-12: Tăng kích thước vòng tròn nền
                    className="absolute top-6 left-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl cursor-pointer active:scale-90 transition-all hover:bg-gray-100"
                    style={{ border: 'none', outline: 'none' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}      /* Tăng độ đậm lên 3 */
                        stroke="black"       /* Màu đen */
                        className="w-8 h-8"  /* Tăng kích thước icon lên w-8 h-8 */
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* Hiệu ứng nền */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none"></div>

                <div className="flex flex-col items-center relative z-10 pt-2">
                    <div className="w-24 h-24 rounded-full border-4 border-yellow-400 bg-gray-800 flex items-center justify-center text-4xl shadow-xl mb-3 relative">
                        👨‍✈️
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                    </div>
                    <h1 className="text-2xl font-bold">{driver.name}</h1>
                    <p className="text-gray-400 font-mono text-sm">{driver.phone}</p>

                    <div className="flex gap-4 mt-6 w-full justify-center">
                        <div className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-2xl border border-slate-700 text-center min-w-[100px]">
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Đánh giá</p>
                            <p className="font-bold text-yellow-400 text-lg">⭐ {driver.rating}</p>
                        </div>
                        <div className="bg-slate-800/80 backdrop-blur px-4 py-2 rounded-2xl border border-slate-700 text-center min-w-[100px]">
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Tham gia</p>
                            <p className="font-bold text-white text-lg">2 năm</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT --- */}
            <div className="p-5 space-y-5 -mt-6 relative z-20">

                {/* Card: Ví tiền */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Số dư ví</p>
                        <h2 className="text-3xl font-bold text-green-600 mt-1">{driver.wallet}</h2>
                    </div>
                    <Button variant="secondary" className="text-xs h-9 px-4 border-green-200 text-green-700 bg-green-50 hover:bg-green-100 font-bold">
                        Rút tiền
                    </Button>
                </div>

                {/* Card: Thông tin xe */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                        🏍️ Phương tiện
                    </h3>
                    <div className="flex justify-between items-center py-3 border-b border-gray-50 border-dashed">
                        <span className="text-gray-500 text-sm">Loại xe</span>
                        <span className="font-bold text-gray-800 text-right">{driver.vehicle}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <span className="text-gray-500 text-sm">Biển số</span>
                        <span className="font-bold bg-gray-100 px-3 py-1 rounded text-gray-800 border border-gray-200 font-mono">
                            {driver.plate}
                        </span>
                    </div>
                </div>

                {/* Menu Actions */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Link sang Lịch sử */}
                    <div
                        className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
                        onClick={() => navigate('/partner/history')}
                    >
                        <span className="text-gray-700 font-medium flex items-center gap-3">
                            <span className="text-xl">📜</span> Lịch sử chuyến đi
                        </span>
                        <span className="text-gray-400 text-xl">›</span>
                    </div>

                    <div className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
                        <span className="text-gray-700 font-medium flex items-center gap-3">
                            <span className="text-xl">⚙️</span> Cài đặt ứng dụng
                        </span>
                        <span className="text-gray-400 text-xl">›</span>
                    </div>
                    <div className="p-4 border-b border-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
                        <span className="text-gray-700 font-medium flex items-center gap-3">
                            <span className="text-xl">📞</span> Hỗ trợ đối tác
                        </span>
                        <span className="text-gray-400 text-xl">›</span>
                    </div>

                    {/* Nút Đăng xuất */}
                    <div
                        className="p-4 flex items-center justify-between cursor-pointer hover:bg-red-50 text-red-600 transition"
                        onClick={handleLogout}
                    >
                        <span className="font-bold flex items-center gap-3">
                            <span className="text-xl">🚪</span> Đăng xuất
                        </span>
                    </div>
                </div>

                <p className="text-center text-xs text-gray-400 pt-4 pb-8">
                    Phiên bản 1.0.2 • Smart Cab Partner
                </p>
            </div>
        </div>
    );
}