import React, { useState } from 'react';
import { HomeSidebar } from '../organisms/HomeSidebar';
import { HomeHeader } from '../organisms/HomeHeader';
import { AudioPlayerBar } from '../organisms/AudioPlayerBar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    noPadding?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, noPadding = false }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-[#0D111D] text-white overflow-hidden font-sans relative">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <HomeSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <HomeHeader onMenuClick={() => setIsSidebarOpen(true)} />

                <div className={`flex-1 overflow-y-auto custom-scrollbar ${noPadding ? '' : 'p-4 lg:p-8'}`}>
                    {children}
                </div>

                <AudioPlayerBar />
            </main>
        </div>
    );
};
