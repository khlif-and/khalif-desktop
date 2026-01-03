import React from 'react';

interface AlquranHeaderProps {
    title?: string;
    onBack?: () => void;
    onSearch?: () => void;
}

export const AlquranHeader: React.FC<AlquranHeaderProps> = ({ title = 'Quran', onBack, onSearch }) => {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm z-20 sticky top-0">
            <button
                onClick={onBack}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">{title}</h1>
            <button
                onClick={onSearch}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </header>
    );
};
