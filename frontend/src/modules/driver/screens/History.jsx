import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DriverHistory() {
    const navigate = useNavigate();

    // Dữ liệu giả lập lịch sử
    const rides = [
        { id: 1, date: "Hôm nay, 10:30", from: "Vincom Q1", to: "Landmark 81", price: "55.000đ", status: "COMPLETED", rating: 5 },
        { id: 2, date: "Hôm nay, 09:15", from: "Sân bay TSN", to: "Phố đi bộ", price: "125.000đ", status: "COMPLETED", rating: 4 },
        { id: 3, date: "Hôm qua, 18:20", from: "Q.7 Lotte Mart", to: "Q.4 Bến Vân Đồn", price: "42.000đ", status: "CANCELLED", rating: 0 },
        { id: 4, date: "Hôm qua, 14:00", from: "Bến xe Miền Đông", to: "Gò Vấp", price: "68.000đ", status: "COMPLETED", rating: 5 },
        { id: 5, date: "20/10, 08:00", from: "Thảo Điền", to: "Quận 1", price: "85.000đ", status: "COMPLETED", rating: 5 },
        { id: 6, date: "19/10, 18:30", from: "Bitexco", to: "Chợ Bến Thành", price: "32.000đ", status: "COMPLETED", rating: 5 },
        { id: 7, date: "18/10, 12:00", from: "Aeon Mall Tân Phú", to: "Sân Bay TSN", price: "150.000đ", status: "COMPLETED", rating: 5 },
    ];

    return (
        <div className="h-full flex flex-col bg-slate-900 text-white overflow-hidden">

            {/* --- HEADER (CỐ ĐỊNH) --- */}
            <div className="p-4 pt-6 border-b border-slate-800 flex items-center bg-slate-900 shrink-0 shadow-md z-10 relative">

                {/* 👇 NÚT BACK: ĐÃ ĐỒNG BỘ VỚI PROFILE (TO, ĐẬM, ĐEN) 👇 */}
                <button
                    onClick={() => navigate(-1)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl cursor-pointer active:scale-90 transition-all hover:bg-gray-100 mr-4"
                    style={{ border: 'none', outline: 'none' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}       /* Nét đậm */
                        stroke="black"        /* Màu đen */
                        className="w-8 h-8"   /* Kích thước to */
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                <h1 className="text-xl font-bold">Lịch sử hoạt động</h1>
            </div>

            {/* --- PHẦN DANH SÁCH (CUỘN ĐƯỢC + ẨN THANH SCROLL) --- */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-4 pb-20">

                {/* Thống kê doanh thu */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-sm">
                        <p className="text-xs text-gray-400 mb-1">Tổng thu nhập</p>
                        <p className="text-2xl font-bold text-green-400">375k</p>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-sm">
                        <p className="text-xs text-gray-400 mb-1">Hoàn thành</p>
                        <p className="text-2xl font-bold text-yellow-400">7 chuyến</p>
                    </div>
                </div>

                {/* Danh sách cuốc xe */}
                {rides.map((ride) => (
                    <div key={ride.id} className="bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-sm active:scale-[0.98] transition duration-200">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">{ride.date}</p>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ride.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {ride.status === 'COMPLETED' ? '● Hoàn thành' : '● Đã hủy'}
                                </span>
                            </div>
                            <p className="text-lg font-bold text-white">{ride.price}</p>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-3 pl-1 relative my-4">
                            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-slate-700"></div>

                            <div className="flex gap-3 relative z-0 items-start">
                                <div className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0 shadow-sm shadow-green-500/50"></div>
                                <p className="text-sm text-gray-300 line-clamp-2 leading-tight">{ride.from}</p>
                            </div>
                            <div className="flex gap-3 relative z-0 items-start">
                                <div className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0 shadow-sm shadow-red-500/50"></div>
                                <p className="text-sm text-gray-300 line-clamp-2 leading-tight">{ride.to}</p>
                            </div>
                        </div>

                        {/* Footer Card */}
                        {ride.status === 'COMPLETED' && (
                            <div className="mt-3 pt-3 border-t border-slate-700/50 flex justify-between items-center">
                                <div className="flex gap-0.5 text-yellow-400 text-sm">
                                    {[...Array(ride.rating)].map((_, i) => <span key={i}>⭐</span>)}
                                </div>
                                <span className="text-xs text-gray-500 bg-slate-900 px-2 py-1 rounded-lg">Tiền mặt</span>
                            </div>
                        )}
                    </div>
                ))}

                <p className="text-center text-xs text-gray-500 pt-4 pb-8">
                    — Bạn đã xem hết lịch sử —
                </p>
            </div>

        </div>
    );
}