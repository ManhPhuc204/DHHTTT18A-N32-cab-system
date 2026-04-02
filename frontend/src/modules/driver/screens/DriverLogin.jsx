import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { loginAPI } from '../../../services/auth';

export default function DriverLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            // Gọi API đăng nhập (Hardcode test tài xế)
            const user = await loginAPI("driver@smartcab.com", "123");

            if (user.role !== 'DRIVER') {
                alert("Tài khoản này không phải là Tài xế!");
                return;
            }

            localStorage.setItem("user", JSON.stringify(user));
            navigate('/partner'); // Vào Dashboard tài xế
        } catch (error) {
            alert("Lỗi đăng nhập");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white">
            <div className="w-full max-w-sm space-y-8">

                {/* Logo & Branding */}
                <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-400 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-yellow-400/20">
                        <span className="text-4xl">👨‍✈️</span>
                    </div>
                    <h1 className="text-3xl font-bold">Smart Partner</h1>
                    <p className="text-gray-400 mt-2">Ứng dụng dành cho Đối tác Tài xế</p>
                </div>

                {/* Form Login */}
                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Số điện thoại</label>
                        <Input placeholder="Nhập số điện thoại..." className="bg-gray-700 border-gray-600 text-white placeholder-gray-500" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-300 mb-1 block">Mật khẩu</label>
                        <Input type="password" placeholder="••••••••" className="bg-gray-700 border-gray-600 text-white placeholder-gray-500" />
                    </div>

                    {/* --- CẬP NHẬT QUAN TRỌNG: SỬ DỤNG VARIANT YELLOW --- */}
                    <Button
                        fullWidth
                        variant="yellow" // <--- Đã đổi thành màu vàng chuẩn của app tài xế
                        className="mt-4"
                        onClick={handleLogin}
                    >
                        {loading ? "Đang kết nối..." : "Đăng nhập ngay"}
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-500">
                    Chưa là tài xế? <span className="text-yellow-400 cursor-pointer font-bold">Đăng ký đối tác</span>
                </p>
            </div>
        </div>
    );
}