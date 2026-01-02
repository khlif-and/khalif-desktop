import React from 'react';
import { DashboardLayout } from '../components/templates/DashboardLayout';
import { PlaylistHero } from '../components/organisms/PlaylistHero';
import { PlaylistTrackList } from '../components/organisms/PlaylistTrackList';

export const PlaylistPage: React.FC = () => {
    return (
        <DashboardLayout noPadding>
            <div className="pb-10">
                <PlaylistHero />
                <PlaylistTrackList />
            </div>
        </DashboardLayout>
    );
};
