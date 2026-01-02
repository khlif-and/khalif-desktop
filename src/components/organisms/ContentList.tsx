import React from 'react';

export const ContentList: React.FC = () => {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 uppercase font-semibold px-4 pb-2 border-b border-white/5">
                <span className="w-1/2">Judul</span>
                <span className="w-1/4 hidden sm:block">Qari/Ustadz</span>
                <span className="w-1/4 text-right">Durasi</span>
            </div>

            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group cursor-pointer transition-colors">
                    <div className="flex items-center gap-4 w-1/2">
                        <div className="w-10 h-10 rounded-lg bg-gray-800 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('https://source.unsplash.com/random/100x100?mosque&sig=${item}')` }}></div>
                        <div className="min-w-0">
                            <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors truncate">Surah Al-Mulk</h4>
                            <span className="text-xs text-gray-500 truncate block">Mekkah • 30 Ayat</span>
                        </div>
                    </div>
                    <span className="text-sm text-gray-400 w-1/4 hidden sm:block">Mishary Rashid</span>
                    <div className="text-sm text-gray-500 w-1/4 text-right flex items-center justify-end gap-4">
                        <span>04:30</span>
                        <button className="text-gray-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">⋮</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
