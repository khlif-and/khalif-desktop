
import React from 'react';
import redRippleBg from '../assets/red-ripple-bg.png';

interface OnboardingScreenProps {
    onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
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
                    Romi - Your AI Personal
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-500 mb-6">
                    Concierge
                </h1>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
                    One intelligent agent that runs your calendar, books services, and curates unique experiences. Consider it handled.
                </p>

                {/* Input Field Area */}
                <div className="w-full max-w-xl relative mb-8 group">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-full pl-6 pr-2 py-2 backdrop-blur-md shadow-2xl">
                        <span className="text-red-500 mr-3 text-lg font-serif italic">R</span>
                        <input type="text" placeholder="How can I help you today?" className="bg-transparent border-none outline-none text-white placeholder-gray-400 flex-1 h-full py-2 text-sm md:text-base" />
                        <button
                            onClick={onComplete}
                            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            My First Task <span className="text-lg">→</span>
                        </button>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl">
                    {["Wellness, Health & Beauty", "Career & Growth", "Legal & Financial", "Travel & Relocation", "Home & Style", "Tech, Brand & Creative", "Coaching & Insight", "Experiences & Gifting"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 hover:bg-white/10 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    );
};
