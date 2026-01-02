
import React from 'react';
import abstractBg from '../assets/abstract-bg.png';

export const SplashScreen: React.FC = () => {
    return (
        <div className="relative w-full h-full bg-black overflow-hidden flex font-sans select-none fixed inset-0 z-50">
            {/* Right Side Background Image with Fade Gradient */}
            <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-0">
                <img src={abstractBg} alt="Background" className="w-full h-full object-cover opacity-90" />
                {/* Gradient Overlay to fade into black on the left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Left Side Content */}
            <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 text-white">

                {/* Logo (Top Left relative to content area, or absolute) */}
                <div className="absolute top-12 left-8 md:left-20">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="14.1421" y="0" width="10" height="10" transform="rotate(45 14.1421 0)" fill="white" />
                        <rect x="0" y="14.1421" width="10" height="10" transform="rotate(45 0 14.1421)" fill="white" />
                        <rect x="28.2843" y="14.1421" width="10" height="10" transform="rotate(45 28.2843 14.1421)" fill="white" />
                        <rect x="14.1421" y="28.2843" width="10" height="10" transform="rotate(45 14.1421 28.2843)" fill="white" />
                    </svg>
                </div>

                {/* Main Text Content */}
                <div className="mt-20">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">DESAPP.</h1>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
                        Free app made with love by our open source community so that Linux users can get into UI/UX design, too. We are trying to offer learning and developing opportunities to all people from all around the world.
                    </p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-10 left-8 md:left-20 max-w-xs">
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
