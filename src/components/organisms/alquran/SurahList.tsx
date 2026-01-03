import React from 'react';
import { Surah, SurahListItem } from '../../molecules/SurahListItem';

interface SurahListProps {
    surahs: Surah[];
    onSurahClick?: (surah: Surah) => void;
}

export const SurahList: React.FC<SurahListProps> = ({ surahs, onSurahClick }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {surahs.map((surah) => (
                <SurahListItem
                    key={surah.number}
                    surah={surah}
                    onClick={() => onSurahClick && onSurahClick(surah)}
                />
            ))}
        </div>
    );
};
