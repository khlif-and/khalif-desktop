import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                type="checkbox"
                className="w-4 h-4 rounded bg-[#1A1F2E] border-gray-600 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                {...props}
            />
            {label && <label className="text-sm text-gray-400 cursor-pointer">{label}</label>}
        </div>
    );
};
