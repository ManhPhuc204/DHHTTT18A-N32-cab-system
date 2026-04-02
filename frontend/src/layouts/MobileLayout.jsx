import React from 'react';
import { Outlet } from "react-router-dom";

export default function MobileLayout() {
    return (
        // NỀN MÀU TỐI (Dùng mã màu hex trực tiếp để đảm bảo nhận màu)
        <div className="min-h-screen w-full flex items-center justify-center font-sans p-0 sm:p-4" style={{ backgroundColor: '#1e293b' }}>

            {/* KHUNG ĐIỆN THOẠI */}
            <div className="w-full max-w-[430px] h-[100dvh] sm:h-[95vh] bg-white relative shadow-2xl sm:rounded-[35px] overflow-hidden flex flex-col border-[0px] sm:border-[8px]" style={{ borderColor: '#0f172a' }}>

                {/* Tai thỏ (Chỉ hiện trên máy tính) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-xl z-[9999] hidden sm:block pointer-events-none"></div>

                {/* NỘI DUNG APP */}
                <div className="flex-1 w-full h-full overflow-hidden relative bg-gray-50">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}