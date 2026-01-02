import React from 'react';

import { COLORS } from '../../constants/colors';

export const AudioPlayerBar: React.FC = () => {
    return (
        <div
            className="h-20 border-t border-white/5 flex items-center justify-between px-4 md:px-6 z-30 gap-4"
            style={{ backgroundColor: COLORS.background.player }}
        >
            {/* Song Info - Flexible width but constrained */}
            <div className="flex items-center gap-3 w-full md:w-1/4 min-w-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-800 flex-shrink-0"></div>
                <div className="min-w-0 overflow-hidden">
                    <h4 className="text-sm font-medium text-white truncate">Surah Al-Waqiah</h4>
                    <p className="text-xs text-gray-500 truncate">Mishary Rashid</p>
                </div>
            </div>

            {/* Controls - Centered & Responsive */}
            <div className="flex flex-col items-center flex-1 max-w-lg">
                <div className="flex items-center gap-4 md:gap-6 mb-1 md:mb-2">
                    {/* Extra controls hidden on mobile */}
                    <button className="text-gray-400 hover:text-white hidden md:block">🔀</button>

                    <button className="text-gray-400 hover:text-white">⏮</button>
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">▶</button>
                    <button className="text-gray-400 hover:text-white">⏭</button>

                    <button className="text-gray-400 hover:text-white hidden md:block">🔁</button>
                </div>

                {/* Progress Bar */}
                <div className="w-full flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500">
                    <span className="hidden md:inline">02:15</span>
                    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden group cursor-pointer">
                        <div className="w-1/3 h-full bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
                    </div>
                    <span className="hidden md:inline">04:30</span>
                </div>
            </div>

            {/* Volume/Actions - Hidden on Mobile */}
            <div className="w-1/4 hidden md:flex items-center justify-end gap-4">
                <button className="text-gray-400 hover:text-white">🎤</button>
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">🔊</span>
                    <div className="w-20 h-1 bg-gray-800 rounded-full">
                        <div className="w-2/3 h-full bg-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
