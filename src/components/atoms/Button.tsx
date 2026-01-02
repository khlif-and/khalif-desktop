import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    fullWidth?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "font-bold py-3 rounded-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-lg shadow-purple-900/20",
        secondary: "bg-[#1A1F2E] hover:bg-[#252b3d] text-white border border-transparent",
        ghost: "bg-transparent hover:bg-white/10 text-white",
        outline: "border border-gray-700 hover:bg-[#1A1F2E] text-white" // Social buttons style
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
