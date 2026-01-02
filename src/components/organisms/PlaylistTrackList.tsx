import { COLORS } from '../../constants/colors';

interface Track {
    id: number;
    title: string;
    artist: string;
    album: string;
    added: string;
    duration: string;
    imageUrl: string;
}

const TRACKS: Track[] = [
    { id: 1, title: 'So Heavy I Fell Through the Earth', artist: 'Grimes', album: 'Miss Anthropocene', added: '20 minutes ago', duration: '3:52', imageUrl: 'https://source.unsplash.com/random/100x100?abstract' },
    { id: 2, title: 'WISH FEAT. KIDDO MARV', artist: 'Denzel Curry', album: 'ZUU', added: '2 hours ago', duration: '3:12', imageUrl: 'https://source.unsplash.com/random/100x100?dark' },
    { id: 3, title: 'Cayendo (Side A - Acoustic)', artist: 'Frank Ocean', album: 'Cayendo', added: 'Yesterday', duration: '2:47', imageUrl: 'https://source.unsplash.com/random/100x100?ocean' },
    { id: 4, title: 'WDPK 83.7 FM', artist: 'Daft Punk', album: 'Homework', added: 'Yesterday', duration: '0:28', imageUrl: 'https://source.unsplash.com/random/100x100?radio' },
    { id: 5, title: 'Higher Ground', artist: 'TNGHT', album: 'TNGHT', added: '2 days ago', duration: '3:20', imageUrl: 'https://source.unsplash.com/random/100x100?night' },
];

export const PlaylistTrackList: React.FC = () => {
    return (
        <div className="min-w-0">
            {/* Sticky Header */}
            <div
                className="grid grid-cols-12 gap-4 px-6 md:px-10 py-2 border-b border-white/10 text-xs font-semibold uppercase text-gray-400 sticky top-0 z-10"
                style={{ backgroundColor: COLORS.background.primary }}
            >
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-5 md:col-span-4">Title</div>
                <div className="col-span-3 hidden md:block">Album</div>
                <div className="col-span-2 hidden lg:block">Date Added</div>
                <div className="col-span-2 md:col-span-1 text-right md:text-center"><span className="hidden md:inline">Duration</span><span className="md:hidden">🕒</span></div>
            </div>

            {/* List */}
            <div className="mt-2 space-y-1">
                {TRACKS.map((track, index) => (
                    <div key={track.id} className="grid grid-cols-12 gap-4 px-6 md:px-10 py-3 rounded-lg hover:bg-white/5 group items-center transition-colors cursor-pointer">
                        <div className="col-span-1 text-center text-gray-500 group-hover:text-white">
                            <span className="group-hover:hidden">{index + 1}</span>
                            <button className="hidden group-hover:block mx-auto text-white">▶</button>
                        </div>
                        <div className="col-span-5 md:col-span-4 flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded bg-gray-800 flex-shrink-0 overflow-hidden">
                                <img src={track.imageUrl} alt={track.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0 overflow-hidden">
                                <h4 className="text-white font-medium truncate group-hover:text-blue-400 transition-colors">{track.title}</h4>
                                <p className="text-xs text-gray-500 truncate">{track.artist}</p>
                            </div>
                        </div>
                        <div className="col-span-3 hidden md:block text-sm text-gray-400 truncate">{track.album}</div>
                        <div className="col-span-2 hidden lg:block text-sm text-gray-400">{track.added}</div>
                        <div className="col-span-2 md:col-span-1 text-right md:text-center text-sm text-gray-400">{track.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
