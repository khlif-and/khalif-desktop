import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    fullWidth = true,
    className = '',
    ...props
}) => {
    const baseStyles = "bg-[#1A1F2E] border border-transparent focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors";
    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <input
            className={`${baseStyles} ${widthClass} ${className}`}
            {...props}
        />
    );
};
