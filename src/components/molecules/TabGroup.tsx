import React from 'react';

interface TabGroupProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex items-center justify-between bg-white px-4 border-b border-gray-100 sticky top-[60px] z-10 transition-all duration-300">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`py-3 px-2 text-sm font-medium border-b-2 transition-colors duration-200 ${activeTab === tab
                            ? 'border-[#009688] text-[#009688]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    style={{ width: `${100 / tabs.length}%` }}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};
