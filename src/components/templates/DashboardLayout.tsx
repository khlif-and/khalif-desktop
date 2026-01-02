import React, { useState, useRef } from 'react';
import { HomeSidebar } from '../organisms/HomeSidebar';
import { HomeHeader } from '../organisms/HomeHeader';
import { AudioPlayerBar } from '../organisms/AudioPlayerBar';

import { COLORS } from '../../constants/colors';

interface DashboardLayoutProps {
    children: React.ReactNode;
    noPadding?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, noPadding = false }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (!headerRef.current) return;

        const scrollTop = e.currentTarget.scrollTop;
        if (scrollTop > 50) {
            headerRef.current.style.backgroundColor = COLORS.background.primary;
            headerRef.current.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        } else {
            headerRef.current.style.backgroundColor = 'transparent';
            headerRef.current.style.borderColor = 'transparent';
        }
    };

    return (
        <div
            className="flex h-screen text-white overflow-hidden font-sans relative"
            style={{ backgroundColor: COLORS.background.primary }}
        >
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <HomeSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <HomeHeader ref={headerRef} onMenuClick={() => setIsSidebarOpen(true)} />

                <div
                    className={`flex-1 overflow-y-auto custom-scrollbar ${noPadding ? '' : 'p-4 lg:p-8 pt-24 lg:pt-28'}`}
                    onScroll={handleScroll}
                >
                    {children}
                </div>

                <AudioPlayerBar />
            </main>
        </div>
    );
};
