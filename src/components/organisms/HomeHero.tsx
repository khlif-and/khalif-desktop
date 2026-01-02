import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

export const HomeHero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: Main Feature */}
            <div
                className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => navigate(PATHS.PLAYLIST)}
            >
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors"></div>
                {/* Placeholder gradient as image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-900/80 mix-blend-overlay"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-3 inline-block">Surah of the day</span>
                    <h2 className="text-3xl font-bold mb-1">Al-Kahf</h2>
                    <p className="text-gray-300 text-sm flex items-center justify-between">
                        <span>Syeikh Mishary Rashid</span>
                        <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">▶</button>
                    </p>
                </div>
            </div>

            {/* Card 2: Secondary Feature */}
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer hidden md:block">
                <div className="absolute inset-0 bg-gray-800"></div> {/* Placeholder bg */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070')] bg-cover bg-center opacity-60"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white mb-3 inline-block">Kajian Pilihan</span>
                    <h2 className="text-3xl font-bold mb-1">Hidup Tenang</h2>
                    <p className="text-gray-300 text-sm flex items-center justify-between">
                        <span>Ustadz Hanan Attaki</span>
                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/20 transition-colors">▶</button>
                    </p>
                </div>
            </div>
        </section>
    );
};
