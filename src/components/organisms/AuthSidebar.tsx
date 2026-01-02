
import React from 'react';
import desertDuneBg from '../../assets/desert-dune-bg.png';

interface AuthSidebarProps {
    onBack?: () => void;
}

export const AuthSidebar: React.FC<AuthSidebarProps> = ({ onBack }) => {
    return (
        <div className="hidden md:flex w-5/12 relative flex-col justify-end p-12">
            <img src={desertDuneBg} alt="Desert Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            {/* Top Content (Logo/Back) */}
            <div className="absolute top-8 left-8 z-20">
                <h2 className="text-3xl font-bold tracking-widest text-white/90">HSO</h2>
            </div>

            <div className="absolute top-8 right-8 z-20">
                <button
                    onClick={onBack}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 text-white"
                >
                    Back <span>→</span>
                </button>
            </div>

            {/* Bottom Content */}
            <div className="relative z-20 mb-10 text-white">
                <h3 className="text-3xl font-bold leading-tight mb-2">Capturing Moments,<br />Creating Memories</h3>

                {/* Carousel Indicators - Could be an atom/molecule */}
                <div className="flex gap-2 mt-6">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
