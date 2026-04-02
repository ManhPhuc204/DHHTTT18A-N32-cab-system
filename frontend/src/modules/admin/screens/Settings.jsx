import React, { useState } from 'react';
import Button from '../../../components/ui/Button';

export default function AdminSettings() {
    // Trạng thái giả lập
    const [prices, setPrices] = useState({
        bikeBase: '12,000',
        bikeKm: '5,000',
        carBase: '25,000',
        carKm: '12,000',
        commission: '20' // 20%
    });

    const [system, setSystem] = useState({
        maintenance: false,
        autoApproveDriver: true,
        allowRegistration: true
    });

    const handleSave = () => {
        alert("✅ Đã lưu cấu hình hệ thống thành công!");
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 h-full w-full">

            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Cài đặt Hệ thống</h2>
                    <p className="text-gray-500 text-sm mt-1">Cấu hình giá cước, chiết khấu và vận hành</p>
                </div>
                <Button
                    variant="primary"
                    className="shadow-lg shadow-green-200"
                    onClick={handleSave}
                >
                    💾 Lưu thay đổi
                </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* --- CỘT TRÁI (2 PHẦN): CẤU HÌNH GIÁ CƯỚC --- */}
                <div className="xl:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            💰 Bảng giá cước
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-normal border border-green-200">Đang áp dụng</span>
                        </h3>

                        {/* Xe máy */}
                        <div className="mb-6">
                            <h4 className="font-bold text-sm text-gray-600 mb-3 uppercase flex items-center gap-2">
                                🛵 Smart Bike (Xe máy)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 block mb-1">Giá mở cửa (2km đầu)</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={prices.bikeBase}
                                            onChange={(e) => setPrices({ ...prices, bikeBase: e.target.value })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 font-bold text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
                                        />
                                        <span className="absolute right-4 top-2.5 text-gray-400 text-sm">đ</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 block mb-1">Giá mỗi km tiếp theo</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={prices.bikeKm}
                                            onChange={(e) => setPrices({ ...prices, bikeKm: e.target.value })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 font-bold text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
                                        />
                                        <span className="absolute right-4 top-2.5 text-gray-400 text-sm">đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ô tô */}
                        <div className="border-t border-gray-100 pt-6">
                            <h4 className="font-bold text-sm text-gray-600 mb-3 uppercase flex items-center gap-2">
                                🚕 Smart Car (Ô tô 4 chỗ)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 block mb-1">Giá mở cửa (2km đầu)</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={prices.carBase}
                                            onChange={(e) => setPrices({ ...prices, carBase: e.target.value })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 font-bold text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
                                        />
                                        <span className="absolute right-4 top-2.5 text-gray-400 text-sm">đ</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 block mb-1">Giá mỗi km tiếp theo</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={prices.carKm}
                                            onChange={(e) => setPrices({ ...prices, carKm: e.target.value })}
                                            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 font-bold text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
                                        />
                                        <span className="absolute right-4 top-2.5 text-gray-400 text-sm">đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chiết khấu */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4">💎 Chiết khấu & Thuế</h3>
                        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100 gap-4">
                            <div>
                                <p className="font-bold text-blue-800">Phí hoa hồng hệ thống</p>
                                <p className="text-xs text-blue-600">Phần trăm thu nhập giữ lại trên mỗi cuốc xe hoàn thành</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-blue-200 shadow-sm">
                                <input
                                    type="text"
                                    value={prices.commission}
                                    onChange={(e) => setPrices({ ...prices, commission: e.target.value })}
                                    className="w-12 font-bold text-xl text-blue-800 outline-none text-right"
                                />
                                <span className="font-bold text-blue-800 text-xl">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CỘT PHẢI (1 PHẦN): CẤU HÌNH HỆ THỐNG --- */}
                <div className="xl:col-span-1 space-y-6">

                    {/* Công tắc vận hành */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-6">⚙️ Vận hành</h3>

                        <div className="space-y-6">
                            {/* Switch 1 */}
                            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">Chế độ Bảo trì</p>
                                    <p className="text-xs text-gray-500">Tạm dừng dịch vụ</p>
                                </div>
                                <button
                                    onClick={() => setSystem({ ...system, maintenance: !system.maintenance })}
                                    className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${system.maintenance ? 'bg-red-500' : 'bg-gray-300'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${system.maintenance ? 'translate-x-5' : ''}`}></div>
                                </button>
                            </div>

                            {/* Switch 2 */}
                            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">Duyệt nhanh Tài xế</p>
                                    <p className="text-xs text-gray-500">Bỏ qua bước duyệt tay</p>
                                </div>
                                <button
                                    onClick={() => setSystem({ ...system, autoApproveDriver: !system.autoApproveDriver })}
                                    className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${system.autoApproveDriver ? 'bg-green-500' : 'bg-gray-300'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${system.autoApproveDriver ? 'translate-x-5' : ''}`}></div>
                                </button>
                            </div>

                            {/* Switch 3 */}
                            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">Cho phép đăng ký</p>
                                    <p className="text-xs text-gray-500">Mở cổng đăng ký mới</p>
                                </div>
                                <button
                                    onClick={() => setSystem({ ...system, allowRegistration: !system.allowRegistration })}
                                    className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${system.allowRegistration ? 'bg-green-500' : 'bg-gray-300'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${system.allowRegistration ? 'translate-x-5' : ''}`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Thông tin Admin */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden">
                        {/* Background Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-3xl border-4 border-slate-800 shadow-lg">
                                👮‍♂️
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Admin Dũng</h3>
                                <p className="text-sm text-slate-400">Super Administrator</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                            <Button variant="secondary" className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700 text-xs h-9">Đổi mật khẩu</Button>
                            <Button variant="secondary" className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700 text-xs h-9">Xem nhật ký</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}