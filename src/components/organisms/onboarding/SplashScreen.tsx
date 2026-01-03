import React from 'react';
import abstractBg from '../../../assets/abstract-bg.png';

interface SplashScreenProps {
    onStart: () => void;
    isNative?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart, isNative = false }) => {
    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black font-sans select-none overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={abstractBg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-between px-8 py-10 md:px-20 md:py-12 text-white">
                <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="14.1421" y="0" width="10" height="10" transform="rotate(45 14.1421 0)" fill="white" />
                        <rect x="0" y="14.1421" width="10" height="10" transform="rotate(45 0 14.1421)" fill="white" />
                        <rect x="28.2843" y="14.1421" width="10" height="10" transform="rotate(45 28.2843 14.1421)" fill="white" />
                        <rect x="14.1421" y="28.2843" width="10" height="10" transform="rotate(45 14.1421 28.2843)" fill="white" />
                    </svg>
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        DESAPP.
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mb-8">
                        Free app made with love by our open source community so that Linux users can get into UI/UX design, too. We are trying to offer learning and developing opportunities to all people from all around the world.
                    </p>

                    {!isNative && (
                        <button
                            onClick={onStart}
                            className="group w-fit flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-gray-200"
                        >
                            Get Started
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    )}
                </div>

                <div className="max-w-xs">
                    <p className="text-[10px] text-gray-500 leading-tight">
                        Made by Vlad Grama and the Linux Open Source Community.
                    </p>
                    <p className="text-[10px] text-gray-600 leading-tight mt-1">
                        This work is free and copyrighted and selling it is punishable under law.
                    </p>
                </div>
            </div>
        </div>
    );
};