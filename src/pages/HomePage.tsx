import React from 'react';
import { DashboardLayout } from '../components/templates/DashboardLayout';
import { HomeRightSidebar } from '../components/organisms/HomeRightSidebar';
import { HomeHero } from '../components/organisms/HomeHero';
import { RecommendationList } from '../components/molecules/RecommendationList';
import { ContentList } from '../components/organisms/ContentList';

export const HomePage: React.FC = () => {
    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Main Content Area (Left 2 cols) */}
                <div className="xl:col-span-2">
                    <HomeHero />
                    <RecommendationList />
                    <ContentList />
                </div>

                {/* Right Sidebar */}
                <HomeRightSidebar />
            </div>
        </DashboardLayout>
    );
};
