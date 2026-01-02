import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SplashScreen } from '../components/organisms/SplashScreen';
import { PATHS } from '../routes/paths';

interface SplashPageProps {
    isNative?: boolean;
}

export const SplashPage: React.FC<SplashPageProps> = ({ isNative = false }) => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate(PATHS.ONBOARDING);
    };

    return <SplashScreen onStart={handleStart} isNative={isNative} />;
};
