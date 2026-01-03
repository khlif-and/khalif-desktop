import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingScreen } from '../components/organisms/onboarding/OnboardingScreen';
import { PATHS } from '../routes/paths';

export const OnboardingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(PATHS.LOGIN);
    };

    const handleRegister = () => {
        navigate(PATHS.REGISTER);
    };

    const handleGuest = () => {
        console.log("Guest Mode Activated");
        // Navigate to dashboard or home as guest
        // navigate(PATHS.DASHBOARD); 
    };

    return <OnboardingScreen onLogin={handleLogin} onRegister={handleRegister} onGuest={handleGuest} />;
};
