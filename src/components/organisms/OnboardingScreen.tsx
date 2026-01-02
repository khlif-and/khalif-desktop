
import React from 'react';
import redRippleBg from '../../assets/red-ripple-bg.png';

interface OnboardingScreenProps {
    onLogin: () => void;
    onRegister: () => void;
    onGuest: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onLogin, onRegister, onGuest }) => {
    return (
        <div className="relative w-full h-full bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center fixed inset-0 z-40">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-2/3 z-0 pointer-events-none">
                <img src={redRippleBg} className="w-full h-full object-cover opacity-80" alt="Background" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center text-center mt-20">

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
                    Khalif - Sahabat
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-500 mb-6">
                    Ibadahmu
                </h1>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
                    Satu aplikasi cerdas untuk menemani perjalanan spiritualmu. Mengakses kitab klasik, jadwal ibadah, dan kajian dengan lebih mudah.
                </p>

                {/* Action Buttons Area */}
                <div className="w-full max-w-md flex flex-col gap-4 mb-10">
                    <button
                        onClick={onLogin}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all"
                    >
                        Login
                    </button>

                    <button
                        onClick={onRegister}
                        className="w-full py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/15 transition-all"
                    >
                        Create Account
                    </button>

                    <button
                        onClick={onGuest}
                        className="w-full py-2 text-gray-400 text-sm hover:text-gray-300 transition-colors"
                    >
                        Continue as Guest
                    </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl">
                    {["Al-Qur'an", "Hadits", "Kitab Klasik", "Cerita Rasul", "Fiqih", "Sejarah Islam", "Doa & Dzikir", "Kajian"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
};
