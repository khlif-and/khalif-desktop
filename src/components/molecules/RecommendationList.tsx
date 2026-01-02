import React from 'react';

const TAGS = ["Murottal Merdu", "Kajian Subuh", "Sejarah Nabi", "Doa Harian", "Fiqih Wanita", "Tafsir", "Zikir Pagi Petang"];

export const RecommendationList: React.FC = () => {
    return (
        <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Mungkin kamu suka</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {TAGS.map((tag, i) => (
                    <button key={tag} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-[#1A1F2B] text-gray-400 hover:text-white hover:bg-white/5'}`}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};
