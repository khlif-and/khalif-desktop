import React from 'react';

export interface Surah {
    number: number;
    name: string;
    meaning: string;
    type: string;
    verses: number;
    arabic: string;
}

interface SurahListItemProps {
    surah: Surah;
    onClick?: () => void;
}

export const SurahListItem: React.FC<SurahListItemProps> = ({ surah, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex gap-4 h-32 border border-transparent hover:border-gray-100"
        >
            {/* Visual/Image Area - Left Side */}
            <div className="w-28 h-full rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-white/10 opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>

                {/* Decorative Arabic Text as 'Image' */}
                <span className="font-serif text-4xl text-white/90 drop-shadow-md transform -rotate-6 group-hover:scale-110 transition-transform duration-500">
                    {surah.arabic}
                </span>

                {/* Number Badge overlay */}
                <div className="absolute top-2 left-2 bg-black/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    #{surah.number}
                </div>
            </div>

            {/* Content Area - Right Side */}
            <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight group-hover:text-[#009688] transition-colors line-clamp-1">
                        {surah.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                        {surah.meaning}
                    </p>
                </div>

                <div className="space-y-2">
                    {/* Fake Rating Stars for aesthetics */}
                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-3 h-3 text-orange-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                            {surah.type}
                        </span>
                        <div className="text-[#009688] font-bold text-sm">
                            {surah.verses} <span className="text-[10px] font-normal text-gray-400">Verses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
