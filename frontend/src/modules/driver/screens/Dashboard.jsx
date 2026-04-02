import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. IMPORT useNavigate
import Button from '../../../components/ui/Button';

export default function DriverDashboard() {
    const navigate = useNavigate(); // 2. KHỞI TẠO navigate
    const [isOnline, setIsOnline] = useState(false);
    const [incomingRide, setIncomingRide] = useState(null);
    const [currentRide, setCurrentRide] = useState(null);

    // Thống kê giả lập
    const [stats, setStats] = useState({
        wallet: "580.000",
        rating: 4.9,
        todayTrips: 12
    });

    // ... (Giữ nguyên các hàm simulateNewRide, handleAccept, handleDecline, handleFinishRide)
    const simulateNewRide = () => {
        if (!isOnline) {
            alert("⚠️ Bạn phải Bật trạng thái SẴN SÀNG mới nhận được cuốc!");
            return;
        }
        setTimeout(() => {
            setIncomingRide({
                id: "BK-888999",
                customerName: "Nguyễn Văn Khách",
                pickup: "Vincom Đồng Khởi, Q.1",
                dropoff: "Sân bay Tân Sơn Nhất",
                price: "125.000đ",
                distance: "6.5 km",
                paymentMethod: "Tiền mặt"
            });
        }, 1000);
    };

    const handleAccept = () => {
        setCurrentRide({ ...incomingRide, status: 'PICKING_UP' });
        setIncomingRide(null);
    };

    const handleDecline = () => {
        setIncomingRide(null);
    };

    const handleFinishRide = () => {
        const priceNumber = parseInt(currentRide.price.replace(/\D/g, ''));
        const currentWallet = parseInt(stats.wallet.replace(/\D/g, ''));
        setStats({
            ...stats,
            wallet: (currentWallet + priceNumber).toLocaleString('vi-VN'),
            todayTrips: stats.todayTrips + 1
        });
        alert(`🎉 Hoàn thành! Bạn nhận được ${currentRide.price}`);
        setCurrentRide(null);
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white p-5 relative overflow-hidden">

            {/* --- HEADER (ĐÃ SỬA: Bấm vào Avatar để sang Profile) --- */}
            <div className="flex justify-between items-center mb-6 pt-2">
                <div>
                    <h1 className="text-xl font-bold text-yellow-400">SMART PARTNER</h1>
                    <p className="text-gray-400 text-xs">Tài xế: Lý Tốc Độ</p>
                </div>

                {/* 👇 SỬA ĐOẠN NÀY: Thêm onClick và cursor-pointer 👇 */}
                <div
                    onClick={() => navigate('/partner/profile')}
                    className="w-10 h-10 rounded-full border border-yellow-400 bg-gray-700 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-600 transition"
                >
                    👨‍✈️
                </div>
                {/* 👆 HẾT PHẦN SỬA 👆 */}
            </div>

            {/* ... (Phần còn lại của file giữ nguyên không đổi) ... */}

            {/* TRẠNG THÁI (TOGGLE) */}
            {!currentRide && (
                <div className="bg-slate-800 rounded-2xl p-4 mb-6 flex items-center justify-between border border-slate-700 shadow-lg">
                    <div>
                        <p className="text-gray-400 text-xs font-medium mb-1">Trạng thái hoạt động</p>
                        <h2 className={`text-lg font-bold ${isOnline ? 'text-green-400' : 'text-gray-500'}`}>
                            {isOnline ? 'SẴN SÀNG' : 'TẠM NGHỈ'}
                        </h2>
                    </div>
                    <button
                        onClick={() => setIsOnline(!isOnline)}
                        className={`w-16 h-9 rounded-full relative transition-all duration-300 border-2 ${isOnline
                                ? '!bg-[#22c55e] !border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                                : 'bg-transparent border-gray-600'
                            }`}
                    >
                        <div className={`w-7 h-7 bg-white rounded-full absolute top-0.5 shadow-md transition-all duration-300 ${isOnline ? 'right-0.5' : 'left-0.5'
                            }`}></div>
                    </button>
                </div>
            )}

            {/* THỐNG KÊ */}
            {!currentRide && (
                <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                        <div className="text-gray-400 text-xs mb-1">Ví tiền</div>
                        <div className="text-xl font-bold">{stats.wallet}đ</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                        <div className="text-gray-400 text-xs mb-1">Hôm nay</div>
                        <div className="text-xl font-bold text-yellow-400">{stats.todayTrips} chuyến</div>
                    </div>
                </div>
            )}

            {/* KHU VỰC CHÍNH */}
            <div className="flex-1 flex flex-col items-center justify-center relative w-full">
                {currentRide ? (
                    <div className="w-full h-full flex flex-col animate-in slide-in-from-right">
                        <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-xl mb-4">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-gray-400 text-xs">Khách hàng</p>
                                    <h3 className="text-lg font-bold">{currentRide.customerName}</h3>
                                </div>
                                <div className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-700">
                                    {currentRide.paymentMethod}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="mt-1">🟢</div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Điểm đón</p>
                                        <p className="font-medium text-sm">{currentRide.pickup}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-1">📍</div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Điểm trả</p>
                                        <p className="font-medium text-sm">{currentRide.dropoff}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                                <span className="text-gray-400">Cước phí</span>
                                <span className="text-2xl font-bold text-green-400">{currentRide.price}</span>
                            </div>
                        </div>
                        <div className="mt-auto w-full">
                            <Button fullWidth variant="primary" className="bg-green-600 hover:bg-green-700 text-white h-14 text-lg shadow-green-900/50" onClick={handleFinishRide}>
                                Đã trả khách & Thu tiền
                            </Button>
                        </div>
                    </div>
                ) : (
                    isOnline ? (
                        <>
                            <div className="absolute w-64 h-64 bg-green-500/5 rounded-full animate-[ping_3s_linear_infinite]"></div>
                            <div className="absolute w-48 h-48 bg-green-500/10 rounded-full animate-[ping_2s_linear_infinite]"></div>
                            <div className="relative z-10 bg-slate-800 p-8 rounded-full border-2 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                                <span className="text-5xl">📡</span>
                            </div>
                            <p className="mt-8 text-green-400 font-medium animate-pulse text-sm tracking-widest uppercase">Đang quét cuốc xe...</p>

                            <button onClick={simulateNewRide} className="absolute bottom-10 bg-slate-800 text-xs text-gray-400 px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-700 active:scale-95 transition">
                                ⚡ Giả lập nổ cuốc (Test)
                            </button>
                        </>
                    ) : (
                        <div className="text-center opacity-40">
                            <div className="text-6xl mb-4 grayscale">😴</div>
                            <p className="text-gray-300 font-medium">Bạn đang ngoại tuyến</p>
                            <p className="text-xs text-gray-500 mt-2">Bật công tắc phía trên để nhận việc</p>
                        </div>
                    )
                )}
            </div>

            {/* POPUP NHẬN CUỐC */}
            {incomingRide && (
                <div className="absolute inset-0 bg-black/80 z-50 flex flex-col justify-end pb-6 px-4 animate-in slide-in-from-bottom duration-300 backdrop-blur-sm">
                    <div className="absolute top-20 left-0 right-0 flex justify-center">
                        <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center bg-slate-900 text-3xl font-bold text-green-500 animate-pulse shadow-[0_0_30px_rgba(34,197,94,0.5)]">15s</div>
                    </div>
                    <div className="bg-slate-800 rounded-3xl p-6 border border-slate-600 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                        <div className="text-center mb-6">
                            <h3 className="text-green-400 font-bold text-lg animate-bounce tracking-wide uppercase">🔔 Ting Ting! Khách mới</h3>
                            <p className="text-white text-3xl font-bold mt-2">{incomingRide.price}</p>
                            <div className="flex justify-center gap-2 mt-2">
                                <span className="bg-slate-700 text-gray-300 px-2 py-0.5 rounded text-xs">{incomingRide.distance}</span>
                                <span className="bg-slate-700 text-gray-300 px-2 py-0.5 rounded text-xs">Tiền mặt</span>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                            <div className="flex gap-3 items-start">
                                <span className="text-green-500 mt-0.5 text-xs">🟢</span>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold">Điểm đón</p>
                                    <p className="font-bold text-sm text-gray-200">{incomingRide.pickup}</p>
                                </div>
                            </div>
                            <div className="w-0.5 h-4 bg-gray-700 ml-1.5"></div>
                            <div className="flex gap-3 items-start">
                                <span className="text-red-500 mt-0.5 text-xs">📍</span>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold">Điểm trả</p>
                                    <p className="font-bold text-sm text-gray-200">{incomingRide.dropoff}</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="secondary" className="bg-slate-700 text-white border-slate-600 hover:bg-slate-600" onClick={handleDecline}>Bỏ qua</Button>
                            <Button variant="primary" onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white border-none shadow-lg shadow-green-500/20">NHẬN NGAY</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}