import React from 'react';

interface StarBadgeProps {
    number: number;
}

export const StarBadge: React.FC<StarBadgeProps> = ({ number }) => (
    <div className="relative flex items-center justify-center w-12 h-12">
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#E5D4B3]" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L14.5 7.5L20 9L16 14L17.5 19.5L12 17L6.5 19.5L8 14L4 9L9.5 7.5L12 2Z" fill="#FFF8F0" />
        </svg>
        <span className="absolute text-sm font-bold text-gray-800">{number}</span>
    </div>
);
