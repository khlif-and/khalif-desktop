import React, { useState, useRef } from 'react';
import { HomeSidebar } from '../organisms/home/HomeSidebar';
import { HomeHeader } from '../organisms/home/HomeHeader';
import { AudioPlayerBar } from '../organisms/audio/AudioPlayerBar';

import { COLORS } from '../../constants/colors';

interface DashboardLayoutProps {
    children: React.ReactNode;
    noPadding?: boolean;
    showHeader?: boolean;
    showSidebar?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    noPadding = false,
    showHeader = true,
    showSidebar = true
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);



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

            {showSidebar && <HomeSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {showHeader && <HomeHeader ref={headerRef} onMenuClick={() => setIsSidebarOpen(true)} />}

                <div
                    className={`flex-1 overflow-y-auto custom-scrollbar ${noPadding ? '' : 'p-4 lg:p-8'}`}

                >
                    {children}
                </div>

                <AudioPlayerBar />
            </main>
        </div>
    );
};
