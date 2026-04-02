import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

export default function AdminCustomers() {
    // 1. DỮ LIỆU GIẢ LẬP (Mock Data)
    const [customers, setCustomers] = useState([
        { id: 1, name: "Nguyễn Văn An", phone: "0909111222", email: "an.nguyen@gmail.com", rides: 45, spent: "4.5M", rating: 4.9, status: "ACTIVE", type: "VIP" },
        { id: 2, name: "Trần Thị Bích", phone: "0908333444", email: "bich.tran@yahoo.com", rides: 2, spent: "85K", rating: 5.0, status: "ACTIVE", type: "NEW" },
        { id: 3, name: "Lê Văn Cường", phone: "0912555666", email: "cuong.le@outlook.com", rides: 0, spent: "0đ", rating: 0, status: "LOCKED", type: "REGULAR" },
        { id: 4, name: "Phạm Mỹ Duyên", phone: "0987777888", email: "duyen.pham@gmail.com", rides: 128, spent: "15.2M", rating: 4.7, status: "ACTIVE", type: "VIP" },
        { id: 5, name: "Hoàng Văn Eo", phone: "0933999000", email: "eo.hoang@gmail.com", rides: 12, spent: "540K", rating: 3.5, status: "ACTIVE", type: "REGULAR" },
        { id: 6, name: "Vũ Thị F", phone: "0944111222", email: "f.vu@company.com", rides: 8, spent: "320K", rating: 4.2, status: "ACTIVE", type: "REGULAR" },
        { id: 7, name: "Đặng Văn G", phone: "0955333444", email: "g.dang@gmail.com", rides: 0, spent: "0đ", rating: 0, status: "LOCKED", type: "NEW" },
    ]);

    // 2. HÀM XỬ LÝ
    const handleToggleLock = (id) => {
        setCustomers(customers.map(c =>
            c.id === id ? { ...c, status: c.status === 'LOCKED' ? 'ACTIVE' : 'LOCKED' } : c
        ));
    };

    return (
        // GRID LAYOUT: Mobile 1 cột, PC 4 cột
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 w-full min-h-full">

            {/* --- CỘT TRÁI (NỘI DUNG CHÍNH - CHIẾM 3 PHẦN) --- */}
            <div className="xl:col-span-3 flex flex-col gap-6 min-w-0">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Quản lý Khách hàng</h2>
                        <p className="text-gray-500 text-sm mt-1">Theo dõi người dùng & lịch sử đặt xe</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="secondary" className="bg-white text-gray-600">Xuất Excel</Button>
                        <Button variant="primary" className="shadow-lg shadow-blue-200">Gửi thông báo</Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Tổng người dùng</p>
                            <p className="text-2xl font-extrabold text-gray-800">{customers.length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl">👥</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Khách VIP</p>
                            <p className="text-2xl font-extrabold text-yellow-600">{customers.filter(c => c.type === 'VIP').length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center text-xl">👑</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Bị khóa</p>
                            <p className="text-2xl font-extrabold text-red-600">{customers.filter(c => c.status === 'LOCKED').length}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl">🔒</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase">Mới đăng ký</p>
                            <p className="text-2xl font-extrabold text-blue-600">12</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">✨</div>
                    </div>
                </div>

                {/* Table Data */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="🔍 Tìm tên, SĐT, Email..."
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none bg-white">
                            <option>Tất cả khách</option>
                            <option>Khách VIP</option>
                            <option>Mới đăng ký</option>
                            <option>Đã khóa</option>
                        </select>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead className="bg-gray-50 sticky top-0 z-10">
                                <tr className="text-gray-500 text-xs uppercase font-semibold">
                                    <th className="p-4 whitespace-nowrap">Khách hàng</th>
                                    <th className="p-4 whitespace-nowrap">Phân loại</th>
                                    <th className="p-4 whitespace-nowrap">Lịch sử đặt xe</th>
                                    <th className="p-4 whitespace-nowrap">Đánh giá</th>
                                    <th className="p-4 whitespace-nowrap">Trạng thái</th>
                                    <th className="p-4 text-right whitespace-nowrap">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {customers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-800 text-sm whitespace-nowrap">{user.name}</div>
                                                    <div className="text-xs text-gray-500">{user.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            {user.type === 'VIP' && <span className="text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-100 px-2 py-0.5 rounded">👑 VIP</span>}
                                            {user.type === 'NEW' && <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">✨ Mới</span>}
                                            {user.type === 'REGULAR' && <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Thường</span>}
                                        </td>
                                        <td className="p-4">
                                            <div className="font-bold text-gray-700 text-sm">{user.rides} chuyến</div>
                                            <div className="text-xs text-green-600">Chi tiêu: {user.spent}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-yellow-400 font-bold">★ {user.rating > 0 ? user.rating : '-'}</span>
                                        </td>
                                        <td className="p-4">
                                            {user.status === 'ACTIVE'
                                                ? <span className="text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-md text-xs font-bold">Hoạt động</span>
                                                : <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded-md text-xs font-bold">Đã khóa</span>
                                            }
                                        </td>
                                        <td className="p-4 text-right">
                                            <Button
                                                className={`py-1 px-2 text-xs h-8 whitespace-nowrap ${user.status === 'LOCKED' ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100'}`}
                                                onClick={() => handleToggleLock(user.id)}
                                            >
                                                {user.status === 'LOCKED' ? '🔓 Mở khóa' : '🔒 Khóa'}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Footer Table */}
                    <div className="p-3 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center text-xs text-gray-500">
                        <span>Hiển thị 7 / 2,304 khách hàng</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">Trước</button>
                            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">Sau</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CỘT PHẢI (SIDE PANEL - BỘ LỌC & LOG) --- */}
            <div className="xl:col-span-1 space-y-6">

                {/* Panel 1: Bộ lọc nhanh */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">⚡ Phân loại khách</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-purple-50 cursor-pointer transition">
                            <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                            <span className="text-sm font-medium text-gray-700">Khách VIP</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">15%</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-purple-50 cursor-pointer transition">
                            <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" defaultChecked />
                            <span className="text-sm font-medium text-gray-700">Khách thường xuyên</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">60%</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-purple-50 cursor-pointer transition">
                            <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                            <span className="text-sm font-medium text-gray-700">Khách ít hoạt động</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">25%</span>
                        </label>
                    </div>
                </div>

                {/* Panel 2: Đăng ký mới */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">👋 Đăng ký mới hôm nay</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                    U{i}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700 font-medium">User New #{i}92</p>
                                    <p className="text-xs text-gray-400">0987...123 • Vừa xong</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="secondary" fullWidth className="mt-6 text-xs">Xem danh sách chờ</Button>
                </div>

            </div>

        </div>
    );
}