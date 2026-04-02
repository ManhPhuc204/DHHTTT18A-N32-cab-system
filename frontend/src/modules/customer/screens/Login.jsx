import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

export default function CustomerLogin() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Giả lập logic đăng nhập thành công
        const mockUser = {
            name: "Nguyễn Văn Khách",
            phone: phone,
            avatar: "https://ui-avatars.com/api/?name=Khach+Hang&background=0D8ABC&color=fff"
        };
        localStorage.setItem("user", JSON.stringify(mockUser));
        navigate('/'); // Về trang chủ sau khi đăng nhập
    };

    return (
        <div className="h-full bg-white flex flex-col p-6 overflow-y-auto">

            {/* Nút đóng/quay lại */}
            <button onClick={() => navigate('/')} className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full active:bg-gray-100 text-2xl">
                ✕
            </button>

            <div className="mt-4 mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Chào mừng bạn! 👋</h1>
                <p className="text-gray-500">Nhập số điện thoại để tiếp tục</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 flex-1">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại</label>
                    <div className="relative">
                        <span className="absolute left-4 top-3.5 text-gray-500">🇻🇳 +84</span>
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-16 pr-4 font-bold text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                            placeholder="39 123 4567"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-medium text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="••••••••"
                    />
                    <div className="text-right mt-2">
                        <a href="#" className="text-xs font-bold text-green-600 hover:underline">Quên mật khẩu?</a>
                    </div>
                </div>

                <Button fullWidth size="lg" type="submit" className="bg-green-600 shadow-lg shadow-green-200 mt-4">
                    Đăng nhập
                </Button>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Hoặc tiếp tục với</span></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium text-sm">
                        <span className="text-lg">G</span> Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium text-sm">
                        <span className="text-lg text-blue-600">f</span> Facebook
                    </button>
                </div>
            </form>

            <p className="text-center text-gray-500 mt-6">
                Chưa có tài khoản? <Link to="/auth/register" className="font-bold text-green-600 hover:underline">Đăng ký ngay</Link>
            </p>
        </div>
    );
}