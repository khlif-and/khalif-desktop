import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './paths';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { SplashPage } from '../pages/SplashPage';
import { OnboardingPage } from '../pages/OnboardingPage';

import { HomePage } from '../pages/HomePage';
import { PlaylistPage } from '../pages/PlaylistPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={PATHS.SPLASH} element={<SplashPage />} />
            <Route path="/splash-native" element={<SplashPage isNative={true} />} />
            <Route path={PATHS.ONBOARDING} element={<OnboardingPage />} />
            <Route path={PATHS.LOGIN} element={<LoginPage />} />
            <Route path={PATHS.REGISTER} element={<RegisterPage />} />
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.PLAYLIST} element={<PlaylistPage />} />
            <Route path="*" element={<Navigate to={PATHS.SPLASH} replace />} />
        </Routes>
    );
};
