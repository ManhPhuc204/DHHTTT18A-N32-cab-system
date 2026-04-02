import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
    children,
    variant = 'primary',
    className = '',
    to,
    onClick,
    fullWidth = false,
    disabled = false,
    type = 'button',
    style = {},
    ...props
}) {

    // 1. CẤU HÌNH MÀU SẮC "CỨNG" (Hex Color)
    // Dùng cái này để đảm bảo 100% hiện màu, không phụ thuộc Tailwind
    const variantStyles = {
        primary: {
            backgroundColor: '#16a34a', // Xanh lá đậm
            color: '#ffffff',
            border: 'none'
        },
        blue: {
            backgroundColor: '#2563eb', // Xanh dương (Cho Khách)
            color: '#ffffff',
            border: 'none'
        },
        yellow: {
            backgroundColor: '#facc15', // Vàng (Cho Tài xế)
            color: '#000000',           // Chữ đen cho dễ đọc trên nền vàng
            border: 'none'
        },
        danger: {
            backgroundColor: '#ef4444', // Đỏ
            color: '#ffffff',
            border: 'none'
        },
        secondary: {
            backgroundColor: '#ffffff', // Trắng
            color: '#374151',
            border: '1px solid #d1d5db'
        },
    };

    // Chọn style dựa trên variant, mặc định là primary
    const selectedStyle = variantStyles[variant] || variantStyles.primary;

    // 2. CLASS CƠ BẢN (Vẫn giữ Tailwind cho padding, font, rounded)
    const baseClass = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 active:scale-95 px-4 py-3 text-sm shadow-md";
    const widthClass = fullWidth ? 'w-full' : '';

    // Ghép class
    const finalClass = `${baseClass} ${widthClass} ${className}`;

    // 3. RENDER
    if (to) {
        return (
            <Link
                to={to}
                className={finalClass}
                style={{ ...selectedStyle, ...style }} // Ép style màu vào đây
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={finalClass}
            onClick={onClick}
            disabled={disabled}
            style={{ ...selectedStyle, ...style }} // Ép style màu vào đây
            {...props}
        >
            {disabled ? (
                <span className="flex items-center gap-2 opacity-80">
                    <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang xử lý...
                </span>
            ) : children}
        </button>
    );
}