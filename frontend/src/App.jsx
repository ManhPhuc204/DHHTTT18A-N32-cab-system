import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// --- LAYOUTS ---
import MobileLayout from "./layouts/MobileLayout"; // Khung điện thoại
import AdminLayout from "./layouts/AdminLayout";   // Khung Admin Fullscreen

// --- GUARDS (Bảo vệ Route) ---
import AuthGuard from "./components/common/AuthGuard";

// --- AUTH SCREENS ---
import Login from "./modules/auth/Login"; // Login chung (Admin)
import DriverLogin from "./modules/driver/screens/DriverLogin"; // Login riêng cho Tài xế

// --- CUSTOMER SCREENS (KHÁCH) ---
import CustomerHome from "./modules/customer/screens/Home";
import CustomerLogin from "./modules/customer/screens/Login";     // 👈 MỚI
import CustomerRegister from "./modules/customer/screens/Register"; // 👈 MỚI

// --- DRIVER SCREENS (TÀI XẾ) ---
import DriverDashboard from "./modules/driver/screens/Dashboard";
import DriverProfile from "./modules/driver/screens/Profile";
import DriverHistory from "./modules/driver/screens/History";

// --- ADMIN SCREENS (QUẢN TRỊ) ---
import AdminDashboard from "./modules/admin/screens/Dashboard";
import AdminDrivers from './modules/admin/screens/Drivers';
import AdminCustomers from './modules/admin/screens/Customers';
import AdminSettings from './modules/admin/screens/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================================================
            1. APP KHÁCH HÀNG (CUSTOMER)
            👉 Luôn hiển thị trong khung MobileLayout
           ========================================================= */}
        <Route element={<MobileLayout />}>
          <Route path="/" element={<CustomerHome />} />

          {/* 👇 CÁC TRANG ĐĂNG NHẬP/ĐĂNG KÝ KHÁCH HÀNG (MỚI) 👇 */}
          <Route path="/auth/login" element={<CustomerLogin />} />
          <Route path="/auth/register" element={<CustomerRegister />} />
        </Route>


        {/* =========================================================
            2. APP TÀI XẾ (DRIVER)
           ========================================================= */}

        {/* Trang Login Tài xế (Giao diện riêng, nền tối) */}
        <Route path="/partner/login" element={
          <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-0 sm:p-4">
            {/* Tạo khung giả lập điện thoại cho trang Login */}
            <div className="w-full max-w-[430px] h-[100dvh] sm:h-[95vh] bg-white sm:rounded-[35px] overflow-hidden shadow-2xl relative">
              <DriverLogin />
            </div>
          </div>
        } />

        {/* Các trang bên trong của Tài xế (Dashboard, Profile...) */}
        {/* 👉 Được bảo vệ bởi AuthGuard + Bọc trong MobileLayout */}
        <Route path="/partner" element={
          <AuthGuard role="DRIVER" redirectPath="/partner/login">
            <MobileLayout />
          </AuthGuard>
        }>
          <Route index element={<DriverDashboard />} />
          <Route path="profile" element={<DriverProfile />} />
          <Route path="history" element={<DriverHistory />} />
        </Route>


        {/* =========================================================
            3. ADMIN PORTAL (QUẢN TRỊ VIÊN)
            👉 Hiển thị Full màn hình Desktop
           ========================================================= */}

        {/* Trang Login Admin/Chung */}
        <Route path="/login" element={<Login />} />

        {/* Các trang Admin (Dashboard, Users...) */}
        <Route path="/admin" element={
          <AuthGuard role="ADMIN" redirectPath="/login">
            <AdminLayout />
          </AuthGuard>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="drivers" element={<AdminDrivers />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>


        {/* =========================================================
            4. FALLBACK (NẾU NHẬP SAI URL)
           ========================================================= */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}