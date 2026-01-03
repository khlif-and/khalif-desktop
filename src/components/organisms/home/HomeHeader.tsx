import React, { forwardRef } from 'react';

import { COLORS } from '../../../constants/colors';

interface HomeHeaderProps {
    onMenuClick: () => void;
}

export const HomeHeader = forwardRef<HTMLElement, HomeHeaderProps>(({ onMenuClick }, ref) => {
    return (
        <header
            ref={ref}
            className="h-20 flex items-center justify-between px-4 lg:px-8 z-30 gap-4 transition-all duration-300 border-b border-transparent shrink-0"
            style={{
                backgroundColor: COLORS.background.primary,
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            {/* Hamburger Button & Search */}
            <div className="flex items-center gap-4 flex-1">
                <button
                    className="lg:hidden p-2 text-gray-400 hover:text-white"
                    onClick={onMenuClick}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="w-full max-w-md relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Cari surah, ustadz, atau kajian..."
                        className="w-full text-gray-300 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        style={{ backgroundColor: COLORS.background.secondary }}
                    />
                    <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
                </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
                <button className="text-gray-400 hover:text-white">🔔</button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 overflow-hidden border border-white/10">
                    {/* Avatar placeholder */}
                    <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                </div>
            </div>
        </header>
    );
});

HomeHeader.displayName = 'HomeHeader';
