import React from 'react';
import Button from '../../../components/ui/Button';

export default function AdminDashboard() {
    return (
        // Sử dụng Grid 4 cột: Nội dung chính chiếm 3, Cột bên phải chiếm 1
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 h-full p-4 bg-gray-50">

            {/* --- CỘT TRÁI (MAIN CONTENT - CHIẾM 3 PHẦN) --- */}
            <div className="xl:col-span-3 space-y-6 flex flex-col">

                {/* 1. THẺ THỐNG KÊ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card Doanh thu */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                        <div className="absolute right-0 top-0 p-3 opacity-5 text-8xl group-hover:scale-110 transition">💰</div>
                        <p className="text-gray-500 font-bold text-xs uppercase">Tổng doanh thu</p>
                        <h3 className="text-3xl font-extrabold text-gray-800 mt-1">128.5M</h3>
                        <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg mt-2 inline-block">↗ 12.5%</span>
                    </div>

                    {/* Card Tài xế */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                        <div className="absolute right-0 top-0 p-3 opacity-5 text-8xl group-hover:scale-110 transition">👮‍♂️</div>
                        <p className="text-gray-500 font-bold text-xs uppercase">Tài xế Active</p>
                        <h3 className="text-3xl font-extrabold text-gray-800 mt-1">45/50</h3>
                        <span className="text-blue-600 text-xs font-bold bg-blue-50 px-2 py-1 rounded-lg mt-2 inline-block">● Online</span>
                    </div>

                    {/* Card Khách */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                        <div className="absolute right-0 top-0 p-3 opacity-5 text-8xl group-hover:scale-110 transition">👥</div>
                        <p className="text-gray-500 font-bold text-xs uppercase">Khách mới</p>
                        <h3 className="text-3xl font-extrabold text-gray-800 mt-1">1,208</h3>
                        <span className="text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded-lg mt-2 inline-block">+180 new</span>
                    </div>

                    {/* Card Chuyến */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
                        <div className="absolute right-0 top-0 p-3 opacity-5 text-8xl group-hover:scale-110 transition">🚖</div>
                        <p className="text-gray-500 font-bold text-xs uppercase">Chuyến đi</p>
                        <h3 className="text-3xl font-extrabold text-gray-800 mt-1">342</h3>
                        <span className="text-orange-600 text-xs font-bold bg-orange-50 px-2 py-1 rounded-lg mt-2 inline-block">↗ Cao điểm</span>
                    </div>
                </div>

                {/* 2. BIỂU ĐỒ & MAP */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-80">
                    {/* Chart */}
                    <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-80 lg:h-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800">📈 Doanh thu tuần</h3>
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-2">
                            {[40, 65, 30, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                <div key={i} className="w-full bg-gray-50 rounded-t-md relative group h-full flex items-end">
                                    <div className="w-full bg-green-500 rounded-t-md hover:bg-green-400 transition-all duration-500" style={{ height: `${h}%` }}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-blue-600 rounded-2xl shadow-lg border border-blue-500 p-5 text-white flex flex-col relative overflow-hidden h-64 lg:h-auto">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] opacity-10 bg-cover bg-center"></div>
                        <h3 className="font-bold z-10">📍 Live Radar</h3>
                        <div className="flex-1 flex items-center justify-center z-10">
                            <div className="relative">
                                <div className="w-4 h-4 bg-white rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-white rounded-full relative border-2 border-blue-200"></div>
                            </div>
                        </div>
                        <div className="z-10 text-center">
                            <p className="text-2xl font-bold">12</p>
                            <p className="text-xs text-blue-100">Khu vực kẹt xe</p>
                        </div>
                    </div>
                </div>

                {/* 3. BẢNG DỮ LIỆU */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-gray-800">🚖 Chuyến đi gần nhất</h3>
                        {/* Đổi variant outline -> secondary để khớp với Button.jsx hiện tại */}
                        <Button variant="secondary" className="py-1 px-3 text-xs h-8">Chi tiết</Button>
                    </div>
                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 sticky top-0">
                                <tr className="text-gray-500 text-xs uppercase">
                                    <th className="p-4">Mã</th>
                                    <th className="p-4">Khách</th>
                                    <th className="p-4 hidden md:table-cell">Tài xế</th>
                                    <th className="p-4">Cước</th>
                                    <th className="p-4">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <tr key={item} className="hover:bg-gray-50 border-b border-gray-50 last:border-0 transition">
                                        <td className="p-4 font-medium text-blue-600">#00{item}</td>
                                        <td className="p-4">Nguyễn Văn A</td>
                                        <td className="p-4 hidden md:table-cell">Trần Xe Ôm</td>
                                        <td className="p-4 font-bold">45.000đ</td>
                                        <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Xong</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* --- CỘT PHẢI (SIDE PANEL) --- */}
            <div className="xl:col-span-1 space-y-6 flex flex-col h-full">

                {/* Khối 1: Thông báo hệ thống */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-1 min-h-[300px]">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        🔔 Hoạt động mới
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex gap-3 items-start border-b border-gray-50 pb-3 last:border-0 hover:bg-gray-50 p-2 rounded-lg transition">
                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs shrink-0">
                                    {i % 2 === 0 ? '💰' : 'Mk'}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700 font-medium">
                                        {i % 2 === 0 ? 'Nguyễn Văn A vừa nạp tiền' : 'Đăng ký đối tác mới'}
                                    </p>
                                    <p className="text-xs text-gray-400">2 phút trước</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Khối 2: Top Tài xế */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden">
                    {/* Hiệu ứng nền nhẹ */}
                    <div className="absolute -right-5 -top-5 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>

                    <h3 className="font-bold mb-4 text-yellow-400 relative z-10">🏆 Top Partner</h3>
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border-2 border-yellow-400 bg-gray-700 flex items-center justify-center text-xl">👮‍♂️</div>
                            <div className="flex-1">
                                <div className="font-bold">Lý Tốc Độ</div>
                                <div className="text-xs text-gray-400">Honda Winner X</div>
                            </div>
                            <div className="font-bold text-green-400">5.0 ⭐</div>
                        </div>
                        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-yellow-400 h-full w-[85%]"></div>
                        </div>
                        <p className="text-xs text-center text-gray-400 mt-2">Dẫn đầu doanh thu tháng này</p>
                    </div>
                </div>

                {/* Khối 3: Quick Action */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-5 rounded-2xl text-white shadow-lg">
                    <h3 className="font-bold text-lg mb-2">Hỗ trợ nhanh?</h3>
                    <p className="text-sm opacity-90 mb-4">Tạo thông báo khẩn cấp tới toàn bộ tài xế.</p>
                    <button className="w-full bg-white text-green-700 font-bold py-2 rounded-lg shadow active:scale-95 transition hover:bg-gray-100">
                        Tạo thông báo
                    </button>
                </div>

            </div>

        </div>
    );
}