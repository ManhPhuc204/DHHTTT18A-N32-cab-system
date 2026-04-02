import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { findDriverAPI } from '../../../services/ride';

// --- MOCK DATA XE ---
const VEHICLES = [
    { id: 'bike', name: 'Smart Bike', icon: '🛵', price: '15.000đ', time: '2 phút' },
    { id: 'car', name: 'Smart Car', icon: '🚕', price: '45.000đ', time: '5 phút' },
    { id: 'premium', name: 'Premium', icon: '🚘', price: '70.000đ', time: '8 phút' },
];

export default function CustomerHome() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [bookingStep, setBookingStep] = useState('INPUT');
    const [vehicleType, setVehicleType] = useState('bike');
    const [driver, setDriver] = useState(null);
    const [pickup] = useState("Vị trí hiện tại");
    const [destination, setDestination] = useState("");

    // 👇 STATE CHO MENU SIDEBAR 👇
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        else {
            // Mock user nếu chưa đăng nhập để test giao diện
            setUser({ name: "Khách hàng", phone: "0909.888.888" });
        }
    }, []);

    // ... (Giữ nguyên logic Booking cũ) ...
    useEffect(() => {
        let timer;
        if (bookingStep === 'FOUND') {
            timer = setTimeout(() => setBookingStep('IN_RIDE'), 4000);
        } else if (bookingStep === 'IN_RIDE') {
            timer = setTimeout(() => setBookingStep('PAYMENT'), 8000);
        }
        return () => clearTimeout(timer);
    }, [bookingStep]);

    const handleBooking = async () => {
        if (!destination) { alert("Vui lòng nhập điểm đến!"); return; }

        // Kiểm tra đăng nhập trước khi đặt xe (Tùy chọn)
        /*
        if (!user) {
             if(window.confirm("Vui lòng đăng nhập để đặt xe")) navigate('/auth/login');
             return;
        }
        */

        setBookingStep('SEARCHING');
        try {
            const foundDriver = await findDriverAPI({ type: vehicleType, user: user });
            setTimeout(() => {
                setDriver(foundDriver);
                setBookingStep('FOUND');
            }, 2500);
        } catch (error) {
            setBookingStep('INPUT');
        }
    };

    const handleBackOrReset = () => {
        if (bookingStep === 'INPUT') {
            // 👇 MỞ MENU KHI Ở TRANG CHỦ 👇
            setIsMenuOpen(true);
            return;
        }
        if (['SEARCHING', 'FOUND'].includes(bookingStep)) {
            if (window.confirm("Bạn muốn hủy tìm xe?")) {
                setBookingStep('INPUT');
                setDriver(null);
            }
            return;
        }
        if (bookingStep === 'PAYMENT') {
            setBookingStep('INPUT');
            setDriver(null);
            setDestination("");
            return;
        }
    };

    const handleLogout = () => {
        if (window.confirm("Bạn chắc chắn muốn đăng xuất?")) {
            localStorage.removeItem("user");
            // 👇 SỬA LẠI: Về trang login của Khách hàng, không phải Admin
            navigate('/auth/login');
        }
    };

    return (
        <div className="h-full w-full flex flex-col relative bg-gray-50 overflow-hidden font-sans">

            {/* --- 1. SIDEBAR MENU (MỚI) --- */}
            {/* Overlay đen mờ */}
            <div
                className={`absolute inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel trượt từ trái sang */}
            <div className={`absolute top-0 bottom-0 left-0 w-[75%] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Header Menu */}
                <div className="bg-slate-900 p-6 pt-12 text-white">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold border-4 border-slate-800 mb-3 shadow-lg">
                        {user?.name?.charAt(0) || "U"}
                    </div>
                    <h2 className="text-xl font-bold">{user?.name || "Xin chào"}</h2>
                    <p className="text-gray-400 text-sm">{user?.phone || "09xx..."}</p>
                </div>

                {/* List Menu Items */}
                <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                        <span className="text-xl bg-gray-100 p-2 rounded-lg">🕒</span>
                        <span className="font-medium text-gray-700">Lịch sử chuyến đi</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                        <span className="text-xl bg-gray-100 p-2 rounded-lg">💳</span>
                        <span className="font-medium text-gray-700">Ví thanh toán</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                        <span className="text-xl bg-gray-100 p-2 rounded-lg">📍</span>
                        <span className="font-medium text-gray-700">Địa điểm đã lưu</span>
                    </div>
                    <hr className="my-2 border-gray-100" />
                    <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-xl cursor-pointer transition">
                        <span className="text-xl bg-gray-100 p-2 rounded-lg">⚙️</span>
                        <span className="font-medium text-gray-700">Cài đặt</span>
                    </div>
                </div>

                {/* Footer Menu */}
                <div className="p-4 border-t border-gray-100">
                    <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 font-bold p-2 hover:bg-red-50 rounded-xl w-full transition">
                        <span>🚪</span> Đăng xuất
                    </button>
                </div>
            </div>


            {/* --- 2. MAP BACKGROUND (GIỮ NGUYÊN) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full bg-[#e8eaed] relative overflow-hidden">
                    {/* Vẽ đường phố giả lập */}
                    <div className="absolute top-0 left-1/4 w-8 h-full bg-white border-x-2 border-gray-200 transform -skew-x-12"></div>
                    <div className="absolute top-1/3 left-0 w-full h-10 bg-white border-y-2 border-gray-200 transform -skew-y-6"></div>

                    {/* Radar tìm xe */}
                    {bookingStep === 'SEARCHING' && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-64 h-64 bg-green-500/20 rounded-full animate-ping"></div>
                        </div>
                    )}

                    {/* Pin Vị trí */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${bookingStep === 'INPUT' ? 'scale-100' : 'scale-0'}`}>
                        <div className="relative flex flex-col items-center">
                            <div className="bg-black text-white text-xs px-2 py-1 rounded shadow mb-1 whitespace-nowrap">Bạn ở đây</div>
                            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 3. TOP BAR (NÚT MENU) --- */}
            <div className="absolute top-safe left-4 right-4 z-40 flex justify-between items-start mt-4">
                <button
                    onClick={handleBackOrReset}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-black active:scale-90 transition-transform"
                >
                    {bookingStep === 'INPUT' ? (
                        <span className="text-xl font-bold">☰</span>
                    ) : (
                        <span className="text-xl font-bold">←</span>
                    )}
                </button>
            </div>

            {/* --- 4. BOTTOM SHEET (GIỮ NGUYÊN CODE CŨ) --- */}
            <div className={`absolute bottom-0 left-0 right-0 bg-white z-50 rounded-t-[30px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col ${bookingStep === 'INPUT' ? 'h-[55%]' : 'h-auto min-h-[40%]'}`}>

                <div className="w-full flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                </div>

                <div className="px-5 pb-6 pt-2 flex-1 flex flex-col overflow-y-auto scrollbar-hide">
                    {/* ... (Phần Input, Xe, và Driver info giữ nguyên như code trước đó) ... */}
                    {/* Nếu bạn cần tôi paste lại full phần này hãy báo nhé, còn không thì giữ nguyên logic cũ */}

                    {bookingStep === 'INPUT' && (
                        <div className="animate-in slide-in-from-bottom duration-300 flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Bạn muốn đi đâu?</h2>
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 relative mb-5 shadow-inner">
                                <div className="absolute left-[29px] top-10 bottom-10 w-0.5 border-l-2 border-dashed border-gray-300"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 border-[3px] border-blue-200"></div>
                                        <input type="text" readOnly value={pickup} className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-sm bg-orange-500 border-[3px] border-orange-200"></div>
                                        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Nhập địa chỉ..." className="w-full bg-transparent text-base font-bold text-gray-900 placeholder-gray-400 outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                {VEHICLES.map((v) => (
                                    <div key={v.id} onClick={() => setVehicleType(v.id)} className={`flex-shrink-0 w-28 p-3 rounded-xl border-2 cursor-pointer transition ${vehicleType === v.id ? 'border-green-500 bg-green-50' : 'border-gray-100'}`}>
                                        <div className="text-3xl mb-1 text-center">{v.icon}</div>
                                        <p className="font-bold text-sm text-center">{v.name}</p>
                                        <p className="text-xs text-gray-500 text-center">{v.price}</p>
                                    </div>
                                ))}
                            </div>
                            <Button fullWidth size="lg" className="mt-auto shadow-lg shadow-green-500/30" onClick={handleBooking}>Đặt xe ngay</Button>
                        </div>
                    )}

                    {bookingStep === 'SEARCHING' && (
                        <div className="flex flex-col items-center justify-center text-center py-6">
                            <h3 className="text-xl font-bold mb-2">Đang tìm tài xế...</h3>
                            <div className="w-full bg-gray-100 h-2 rounded-full mb-6 max-w-[200px] overflow-hidden">
                                <div className="h-full bg-green-500 animate-[loading_1.5s_ease-in-out_infinite] w-1/3 rounded-full"></div>
                            </div>
                            <Button variant="secondary" fullWidth onClick={() => setBookingStep('INPUT')}>Hủy tìm kiếm</Button>
                        </div>
                    )}

                    {(bookingStep === 'FOUND' || bookingStep === 'IN_RIDE') && driver && (
                        <div className="animate-in slide-in-from-bottom">
                            <div className="flex items-center justify-between mb-4 bg-green-50 p-3 rounded-xl border border-green-100">
                                <span className="text-sm font-bold text-green-800">{bookingStep === 'FOUND' ? 'Tài xế đang đến!' : 'Đang trong chuyến đi'}</span>
                                <span className="text-xs bg-white px-2 py-1 rounded shadow-sm font-bold">2 phút</span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl border-2 border-white shadow">👨‍✈️</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">{driver.name}</h3>
                                    <p className="text-sm text-gray-500">{driver.vehicle} • <span className="font-mono font-bold text-gray-800 bg-gray-100 px-1 rounded">{driver.plate}</span></p>
                                </div>
                            </div>
                        </div>
                    )}

                    {bookingStep === 'PAYMENT' && (
                        <div className="text-center pt-4">
                            <div className="text-5xl mb-4 animate-bounce">🎉</div>
                            <h2 className="text-2xl font-bold mb-2">Đến nơi rồi!</h2>
                            <p className="text-gray-500 mb-6">Tổng tiền: <span className="text-xl font-bold text-gray-800">{driver?.price}</span></p>
                            <Button fullWidth size="lg" onClick={handleBackOrReset}>Đặt chuyến mới</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}