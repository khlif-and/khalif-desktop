import React, { useState } from 'react';
import { AlquranHeader } from '../components/organisms/alquran/AlquranHeader';
import { TabGroup } from '../components/molecules/TabGroup';
import { SurahList } from '../components/organisms/alquran/SurahList';
import { DashboardLayout } from '../components/templates/DashboardLayout';

// Mock Data
const SURAHS = [
    { number: 1, name: 'Al-Fatihah', meaning: 'The Opener', type: 'Makki', verses: 7, arabic: 'الفاتحة' },
    { number: 2, name: 'Al-Baqarah', meaning: 'The Cow', type: 'Madani', verses: 286, arabic: 'البقرة' },
    { number: 3, name: "Al-'Imran", meaning: 'Family of Imran', type: 'Madani', verses: 200, arabic: 'آل عمران' },
    { number: 4, name: 'An-Nisa', meaning: 'The Women', type: 'Madani', verses: 176, arabic: 'النساء' },
    { number: 5, name: "Al-Ma'idah", meaning: 'The Table Spread', type: 'Madani', verses: 120, arabic: 'المائدة' },
    { number: 6, name: "Al-An'am", meaning: 'The Cattle', type: 'Makki', verses: 165, arabic: 'الأنعام' },
    { number: 7, name: "Al-A'raf", meaning: 'The Heights', type: 'Madani', verses: 206, arabic: 'الأعراف' },
    { number: 8, name: 'Al-Anfal', meaning: 'The Spoils of War', type: 'Madani', verses: 75, arabic: 'الأنفال' },
    { number: 9, name: 'At-Tawbah', meaning: 'The Repentance', type: 'Madani', verses: 129, arabic: 'التوبة' },
];

export const AlquranPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Surah');

    return (
        <DashboardLayout noPadding showHeader={false}>
            <div className="flex flex-col h-full bg-[#FAFAFA] relative">
                <AlquranHeader
                    onBack={() => window.history.back()}
                    onSearch={() => console.log('Search clicked')}
                />

                <TabGroup
                    tabs={['Surah', 'Page', 'Juz', 'Hizb']}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <SurahList
                    surahs={SURAHS}
                    onSurahClick={(surah) => console.log('Surah clicked', surah.name)}
                />
            </div>
        </DashboardLayout>
    );
};
