import { COLORS } from '../../../constants/colors';
import { MediaList, MediaItem } from '../../molecules/MediaList';

export const HomeRightSidebar: React.FC = () => {
    const popularUstadz: MediaItem[] = [
        { id: 1, title: 'Ustadz Adi Hidayat', subtitle: '20M Pendengar', imageUrl: 'https://ui-avatars.com/api/?name=Adi+Hidayat&background=random' },
        { id: 2, title: 'Ustadz Hanan Attaki', subtitle: '15M Pendengar', imageUrl: 'https://ui-avatars.com/api/?name=Hanan+Attaki&background=random' },
        { id: 3, title: 'Ustadz Abdul Somad', subtitle: '12M Pendengar', imageUrl: 'https://ui-avatars.com/api/?name=Abdul+Somad&background=random' },
    ];

    const listeningHistory: MediaItem[] = [
        { id: 1, title: 'Surah Al-Kahf', subtitle: 'Mishary Rashid', imageUrl: 'https://source.unsplash.com/random/100x100?quran' },
        { id: 2, title: 'Kajian Subuh', subtitle: 'Ust. Khalid Basalamah', imageUrl: 'https://source.unsplash.com/random/100x100?mosque' },
        { id: 3, title: 'Dzikir Pagi', subtitle: 'Muzammil Hasballah', imageUrl: 'https://source.unsplash.com/random/100x100?night' },
    ];

    return (
        <div className="space-y-8 hidden xl:block">
            {/* AI Assistant Card */}
            <div
                className="rounded-3xl p-6 relative overflow-hidden"
                style={{ backgroundColor: COLORS.background.secondary }}
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-xl font-bold mb-2">Tanya Khalif AI</h3>
                <p className="text-sm text-gray-400 mb-6">Bingung hukum fiqih atau butuh doa khusus? Tanyakan sekarang.</p>
                <div className="w-16 h-16 mx-auto bg-gradient-to-t from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50 mb-4 animate-pulse">
                    <span className="text-2xl">✨</span>
                </div>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">Mulai Percakapan</button>
            </div>

            {/* Upgrade Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Upgrade Pro</h3>
                <p className="text-blue-100 text-sm mb-4">Dapatkan akses ke ribuan kitab klasik dan audio berkualitas tinggi.</p>
                <button className="px-6 py-2 bg-white text-blue-900 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">Upgrade Sekarang</button>
            </div>

            {/* Trending Section */}
            <MediaList title="Ustadz Populer" items={popularUstadz} />

            {/* Listening History Section */}
            <MediaList title="Riwayat Dengaran" items={listeningHistory} />
        </div>
    );
};
