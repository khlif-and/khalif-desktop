import React from 'react';
import { AuthSidebar } from '../organisms/AuthSidebar';

interface AuthLayoutProps {
    children: React.ReactNode;
    onBack?: () => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, onBack }) => {
    return (
        <div className="flex w-full h-full bg-[#0D111D] text-white font-sans overflow-hidden fixed inset-0 z-30">
            <AuthSidebar onBack={onBack} />

            <div className="relative flex-1 flex flex-col">
                {children}
            </div>
        </div>
    );
};
