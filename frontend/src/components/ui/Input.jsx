import React from 'react';

export default function Input({ icon, placeholder, type = "text", className = '', ...props }) {
    return (
        <div className={`flex items-center bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white transition-all shadow-sm ${className}`}>
            {/* Icon bên trái (nếu có) */}
            {icon && <span className="text-xl mr-3 text-gray-500 select-none">{icon}</span>}

            {/* Ô nhập liệu */}
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-400 font-medium text-sm"
                {...props}
            />
        </div>
    );
}