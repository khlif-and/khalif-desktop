import React from 'react';

interface HomeSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HomeSidebar: React.FC<HomeSidebarProps> = ({ isOpen, onClose }) => {
    return (
        <aside className={`
            fixed lg:relative z-50 w-64 h-full bg-[#0D111D] flex flex-col p-6 border-r border-white/5 transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
            <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold font-sans text-white">K</div>
                    <span className="text-xl font-bold tracking-wide text-white">KHALIF</span>
                </div>
                {/* Close button for mobile */}
                <button
                    className="lg:hidden text-gray-400 hover:text-white"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>

            <nav className="flex-1 space-y-8">
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="flex items-center gap-3 text-blue-500 bg-blue-500/10 px-4 py-2 rounded-lg font-medium"><span className="text-lg">🏠</span> Beranda</a></li>
                        <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"><span className="text-lg">📖</span> Al-Qur'an</a></li>
                        <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"><span className="text-lg">🕌</span> Jadwal Sholat</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Pustaka</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"><span className="text-lg">❤️</span> Favorit</a></li>
                        <li><a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors"><span className="text-lg">🎧</span> Kajian Tersimpan</a></li>
                    </ul>
                </div>
            </nav>

            <div className="mt-auto pt-6 border-t border-white/5">
                <button className="flex items-center gap-3 text-gray-400 hover:text-white px-4 py-2 w-full text-left">
                    <span>➕</span> Buat Playlist
                </button>
            </div>
        </aside>
    );
};
