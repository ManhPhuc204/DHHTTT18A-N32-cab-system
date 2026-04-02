import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

export default function CustomerRegister() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Giả lập đăng ký thành công -> Tự động đăng nhập luôn
        const newUser = {
            name: name,
            phone: phone,
            avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Đăng ký thành công!");
        navigate('/');
    };

    return (
        <div className="h-full bg-white flex flex-col p-6 overflow-y-auto">

            <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full active:bg-gray-100 text-2xl font-bold">
                ←
            </button>

            <div className="mt-2 mb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Tạo tài khoản mới 🚀</h1>
                <p className="text-gray-500">Điền thông tin để bắt đầu chuyến đi</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4 flex-1">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-bold text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="Ví dụ: Nguyễn Văn A"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại</label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-bold text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="0909xxxxxx"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Mật khẩu</label>
                    <input
                        type="password"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-medium text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="Tạo mật khẩu"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-medium text-slate-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="Xác nhận mật khẩu"
                    />
                </div>

                <div className="pt-2">
                    <Button fullWidth size="lg" type="submit" className="bg-slate-900 text-white shadow-xl mt-2">
                        Đăng ký tài khoản
                    </Button>
                </div>

                <p className="text-xs text-center text-gray-400 px-4">
                    Bằng việc đăng ký, bạn đồng ý với <a href="#" className="underline">Điều khoản dịch vụ</a> và <a href="#" className="underline">Chính sách bảo mật</a> của chúng tôi.
                </p>
            </form>

            <p className="text-center text-gray-500 mt-6 pb-4">
                Đã có tài khoản? <Link to="/auth/login" className="font-bold text-green-600 hover:underline">Đăng nhập</Link>
            </p>
        </div>
    );
}