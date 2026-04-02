import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm("Bạn chắc chắn muốn đăng xuất?")) {
            localStorage.removeItem("user");
            navigate('/login');
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen w-full bg-gray-50 text-gray-800 font-sans overflow-hidden">

            {/* SIDEBAR */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-2xl z-20 flex-shrink-0">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">S</div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-wide uppercase">SMART CAB</h1>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">Admin Portal</p>
                    </div>
                </div>

                <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                    <Link to="/admin" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all text-sm font-medium ${isActive('/admin') ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>
                        <span>📊</span> Tổng quan
                    </Link>
                    <Link to="/admin/drivers" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all text-sm font-medium ${isActive('/admin/drivers') ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>
                        <span>🚖</span> Quản lý Tài xế
                    </Link>
                    <Link to="/admin/customers" className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all text-sm font-medium ${isActive('/admin/customers') ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>
                        <span>👥</span> Quản lý Khách
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white text-slate-400 text-xs font-bold transition-all">
                        <span>🚪</span> Đăng xuất
                    </button>
                    <div className="text-[10px] text-slate-600 text-center mt-3">© 2025 Smart Cab System</div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col h-screen relative">
                <header className="bg-white h-16 shadow-sm border-b px-6 flex items-center justify-between z-10 flex-shrink-0">
                    <h2 className="font-bold text-lg text-gray-700 flex items-center gap-2">
                        {location.pathname === '/admin' && 'Dashboard Overview'}
                        {location.pathname === '/admin/drivers' && 'Danh sách Tài xế'}
                        {location.pathname === '/admin/customers' && 'Danh sách Khách hàng'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-bold text-gray-700">Admin Dũng</p>
                            <p className="text-xs text-green-600 font-bold">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow cursor-pointer hover:ring-2 ring-green-400 transition flex items-center justify-center text-lg">👮‍♂️</div>
                    </div>
                </header>

                {/* --- KHU VỰC QUAN TRỌNG: BỎ MAX-WIDTH ĐỂ TRÀN MÀN HÌNH --- */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-6 scroll-smooth">
                    {/* Ở đây tôi dùng w-full và min-h-full, KHÔNG CÓ max-w */}
                    <div className="w-full min-h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}