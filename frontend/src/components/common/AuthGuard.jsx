import { Navigate, useLocation } from "react-router-dom";

export default function AuthGuard({ children, role, redirectPath }) {
    const user = JSON.parse(localStorage.getItem("user"));

    // 1. Chưa đăng nhập -> Đá về đúng trang Login của App đó
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    // 2. Sai quyền (Ví dụ: Khách mà đòi vào trang Tài xế)
    if (role && user.role !== role) {
        // Nếu đang ở app tài xế mà login nhầm nick khách -> Logout luôn và bắt login lại
        localStorage.removeItem("user");
        return <Navigate to={redirectPath} replace />;
    }

    return children;
}