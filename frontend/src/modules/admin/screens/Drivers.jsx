import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

export default function AdminDrivers() {
    // DỮ LIỆU GIẢ LẬP
    const [drivers, setDrivers] = useState([
        { id: 1, name: "Lý Tốc Độ", phone: "0909123456", vehicle: "Honda Winner X", plate: "59-P1 123.45", status: "ACTIVE", rating: 4.8, revenue: "15.2M", wallet: "2.5M", joinDate: "12/05/2024" },
        { id: 2, name: "Trần Văn Chậm", phone: "0909888777", vehicle: "Yamaha Exciter", plate: "59-S2 999.99", status: "PENDING", rating: 0, revenue: "0đ", wallet: "0đ", joinDate: "Hôm nay" },
        { id: 3, name: "Nguyễn Thị Cẩn Thận", phone: "0912345678", vehicle: "Honda Vision", plate: "50-N1 555.66", status: "LOCKED", rating: 4.5, revenue: "2.1M", wallet: "120K", joinDate: "01/01/2024" },
        { id: 4, name: "Phạm Văn D", phone: "0987654321", vehicle: "VinFast Klara", plate: "59-X1 111.22", status: "ACTIVE", rating: 4.9, revenue: "8.5M", wallet: "1.2M", joinDate: "20/06/2024" },
        { id: 5, name: "Lê Văn E", phone: "0933444555", vehicle: "Honda AirBlade", plate: "59-V2 333.44", status: "PENDING", rating: 0, revenue: "0đ", wallet: "500K", joinDate: "Hôm qua" },
        { id: 6, name: "Hoàng Văn F", phone: "0944555666", vehicle: "Honda Wave", plate: "59-K1 222.33", status: "ACTIVE", rating: 4.7, revenue: "5.4M", wallet: "850K", joinDate: "15/07/2024" },
        { id: 7, name: "Vũ Văn G", phone: "0977888999", vehicle: "Toyota Vios", plate: "51G 999.99", status: "ACTIVE", rating: 5.0, revenue: "25.4M", wallet: "5.1M", joinDate: "10/02/2024" },
        { id: 8, name: "Mai Thị H", phone: "0911222333", vehicle: "VinFast VF e34", plate: "30H 567.89", status: "ACTIVE", rating: 4.9, revenue: "18.9M", wallet: "3.2M", joinDate: "05/03/2024" },
    ]);

    const handleApprove = (id) => {
        if (window.confirm("Duyệt tài xế này hoạt động?")) setDrivers(drivers.map(d => d.id === id ? { ...d, status: 'ACTIVE' } : d));
    };

    const handleToggleLock = (id, currentStatus) => {
        const newStatus = currentStatus === 'LOCKED' ? 'ACTIVE' : 'LOCKED';
        if (window.confirm(`Xác nhận đổi trạng thái tài khoản này?`)) setDrivers(drivers.map(d => d.id === id ? { ...d, status: newStatus } : d));
    };

    return (
        // GRID LAYOUT: Mobile 1 cột, PC 4 cột (3 chính - 1 phụ)
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 w-full min-h-full">

            {/* --- CỘT TRÁI (NỘI DUNG CHÍNH) --- */}
            <div className="xl:col-span-3 flex flex-col gap-6 min-w-0">

                {/* 1. Header & Button */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Quản lý Tài xế</h2>
                        <p className="text-gray-500 text-sm mt-1">Danh sách đối tác & kiểm duyệt hồ sơ</p>
                    </div>
                    <Button variant="primary" className="shadow-lg shadow-green-200 w-full sm:w-auto">
                        + Thêm tài xế mới
                    </Button>
                </div>

                {/* 2. Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Tổng hồ sơ</p>
                            <p className="text-2xl font-extrabold text-gray-800">{drivers.length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📂</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Chờ duyệt</p>
                            <p className="text-2xl font-extrabold text-yellow-600">{drivers.filter(d => d.status === 'PENDING').length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-xl">⏳</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Vi phạm</p>
                            <p className="text-2xl font-extrabold text-red-600">{drivers.filter(d => d.status === 'LOCKED').length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl">⚠️</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Doanh thu</p>
                            <p className="text-2xl font-extrabold text-green-600">32.5M</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl">💰</div>
                    </div>
                </div>

                {/* 3. Bảng dữ liệu (Full Width) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="🔍 Tìm tên, SĐT, Biển số..."
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none bg-white">
                            <option>Tất cả trạng thái</option>
                            <option>Hoạt động</option>
                            <option>Chờ duyệt</option>
                            <option>Đã khóa</option>
                        </select>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead className="bg-gray-50">
                                <tr className="text-gray-500 text-xs uppercase font-semibold">
                                    <th className="p-4 whitespace-nowrap">Tài xế</th>
                                    <th className="p-4 whitespace-nowrap">Xe & Biển số</th>
                                    <th className="p-4 whitespace-nowrap">Ví & Doanh thu</th>
                                    <th className="p-4 whitespace-nowrap">Đánh giá</th>
                                    <th className="p-4 whitespace-nowrap">Trạng thái</th>
                                    <th className="p-4 text-right whitespace-nowrap">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {drivers.map((driver) => (
                                    <tr key={driver.id} className="hover:bg-gray-50 transition">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center border text-lg shrink-0">
                                                    {driver.vehicle.includes('Toyota') || driver.vehicle.includes('VinFast') ? '🚕' : '🛵'}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-800 text-sm whitespace-nowrap">{driver.name}</div>
                                                    <div className="text-xs text-gray-500">{driver.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="text-sm font-medium">{driver.vehicle}</div>
                                            <div className="text-xs bg-gray-100 border px-1.5 rounded inline-block mt-1 font-mono">{driver.plate}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold text-green-600 text-sm">{driver.wallet}</div>
                                            <div className="text-xs text-gray-400">Tổng: {driver.revenue}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-yellow-400 font-bold">★ {driver.rating || '-'}</span>
                                        </td>
                                        <td className="p-4">
                                            {driver.status === 'ACTIVE' && <span className="text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-md text-xs font-bold">Hoạt động</span>}
                                            {driver.status === 'PENDING' && <span className="text-yellow-600 bg-yellow-50 border border-yellow-100 px-2 py-1 rounded-md text-xs font-bold animate-pulse">Chờ duyệt</span>}
                                            {driver.status === 'LOCKED' && <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md text-xs font-bold">Đã khóa</span>}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                {driver.status === 'PENDING' ? (
                                                    <Button variant="primary" className="py-1 px-2 text-xs h-8 whitespace-nowrap" onClick={() => handleApprove(driver.id)}>Duyệt</Button>
                                                ) : (
                                                    <button className="text-gray-400 hover:text-gray-600 p-1">•••</button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-3 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center text-xs text-gray-500">
                        <span>Hiển thị 8 / 120</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">Trước</button>
                            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">Sau</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CỘT PHẢI (SIDE PANEL - SỬA LỖI ĐÈ NHAU) --- */}
            <div className="xl:col-span-1 space-y-6">

                {/* Panel 1: Bộ lọc nhanh */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">⚡ Bộ lọc nhanh</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 cursor-pointer transition">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                            <span className="text-sm font-medium text-gray-700">Xe máy (2 Bánh)</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">12</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 cursor-pointer transition">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                            <span className="text-sm font-medium text-gray-700">Ô tô (4 Bánh)</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">5</span>
                        </label>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Theo đánh giá</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full border bg-yellow-50 text-yellow-700 text-xs font-bold border-yellow-200 cursor-pointer hover:bg-yellow-100">5 ★ Tuyệt vời</span>
                            <span className="px-3 py-1 rounded-full border bg-white text-gray-600 text-xs border-gray-200 cursor-pointer hover:bg-gray-50">&lt; 3 ★ Cần chú ý</span>
                        </div>
                    </div>
                </div>

                {/* Panel 2: Log hoạt động (Đã bỏ flex-1 để tránh đè nhau) */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">📝 Hoạt động gần đây</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex gap-3 relative pl-4 border-l-2 border-gray-100 pb-1">
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                <div>
                                    <p className="text-sm text-gray-700">Admin đã duyệt <span className="font-bold">Hồ sơ #{i}92</span></p>
                                    <p className="text-xs text-gray-400 mt-0.5">Vừa xong</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="secondary" fullWidth className="mt-6 text-xs">Xem toàn bộ log</Button>
                </div>

            </div>

        </div>
    );
}