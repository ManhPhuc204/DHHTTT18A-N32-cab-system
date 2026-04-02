import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button'; // Đảm bảo đường dẫn đúng tới file Button của bạn

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Giả lập call API đăng nhập
        setTimeout(() => {
            // Logic kiểm tra đăng nhập đơn giản cho Admin
            // Bạn có thể mở rộng kiểm tra email/password thật ở đây
            const adminUser = {
                name: "Administrator",
                email: email || "admin@smartcab.com",
                role: "ADMIN", // Quan trọng: Set cứng quyền ADMIN
                avatar: "https://ui-avatars.com/api/?name=Admin&background=random"
            };

            // Lưu vào localStorage
            localStorage.setItem("user", JSON.stringify(adminUser));

            // Chuyển hướng thẳng vào trang Admin Dashboard
            navigate('/admin');
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 relative overflow-hidden">

            {/* --- BACKGROUND IMAGE --- */}
            {/* Tôi dùng ảnh Unsplash chủ đề giao thông/công nghệ làm nền, bạn có thể thay bằng ảnh của bạn */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)' // Làm tối nền để chữ nổi bật
                }}
            ></div>

            {/* --- LOGIN FORM --- */}
            <div className="relative z-10 w-full max-w-md px-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-500">

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">SMART CAB</h1>
                        <p className="text-gray-300 text-sm font-medium uppercase tracking-widest">
                            Hệ thống quản trị
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="Tên đăng nhập / Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                placeholder="Mật khẩu quản trị"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                            />
                        </div>

                        <Button
                            fullWidth
                            size="lg"
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-none shadow-lg shadow-green-500/30 text-white font-bold h-12 mt-4"
                        >
                            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400">
                            Phiên bản 2.0 • Dành riêng cho Quản trị viên
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}