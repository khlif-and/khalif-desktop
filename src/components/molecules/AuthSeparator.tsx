import React from 'react';

interface AuthSeparatorProps {
    text?: string;
}

export const AuthSeparator: React.FC<AuthSeparatorProps> = ({ text = "Or" }) => {
    return (
        <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700"></div></div>
            <span className="relative bg-[#0D111D] px-2 text-xs text-gray-500 uppercase">{text}</span>
        </div>
    );
};
