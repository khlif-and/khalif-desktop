import React from 'react';

export const PlaylistHero: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-end gap-6 p-6 md:p-10 pb-6 mb-6 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-[#0D111D] z-0"></div>

            {/* Cover Image */}
            <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 shadow-2xl rounded-xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070"
                    alt="Playlist Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info */}
            <div className="relative z-10 flex-1 min-w-0 pb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-gray-300 mb-2 block">Playlist</span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Pure Fire!!1 🔥</h1>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gray-600 overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Wolfgang+Mozart&background=random" alt="Creator" />
                    </div>
                    <span className="font-bold text-white">Wolfgang Mozart</span>
                    <span>•</span>
                    <span>50 songs, about 3 hr 15 min</span>
                </div>
            </div>
        </section>
    );
};
