import React from 'react';

export interface MediaItem {
    id: number | string;
    title: string;
    subtitle: string;
    imageUrl?: string;
}

interface MediaListProps {
    title: string;
    items: MediaItem[];
    onSeeAll?: () => void;
}

export const MediaList: React.FC<MediaListProps> = ({ title, items, onSeeAll }) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white">{title}</h3>
                <button
                    onClick={onSeeAll}
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                    See all
                </button>
            </div>
            <div className="space-y-3">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 group cursor-pointer">
                        <div
                            className="w-12 h-12 rounded-lg bg-gray-800 bg-cover bg-center flex-shrink-0 border border-white/5 group-hover:border-white/20 transition-colors"
                            style={item.imageUrl ? { backgroundImage: `url('${item.imageUrl}')` } : undefined}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white truncate group-hover:text-blue-400 transition-colors">{item.title}</h4>
                            <p className="text-xs text-gray-500 truncate">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
