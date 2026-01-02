
import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { RegisterScreen } from './components/RegisterScreen';
import './style.css';

const App: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        // Simulate splash screen delay
        const timer = setTimeout(() => {
            setShowSplash(false);
            setShowOnboarding(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleOnboardingComplete = () => {
        setShowOnboarding(false);
        setShowRegister(true); // Default to register or login based on preference
    };

    const navigateToLogin = () => {
        setShowRegister(false);
        setShowLogin(true);
    };

    const navigateToRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    return (
        <div className="w-screen h-screen overflow-hidden">
            {showSplash && <SplashScreen />}
            {showOnboarding && <OnboardingScreen onComplete={handleOnboardingComplete} />}
            {showLogin && <LoginScreen onNavigateToRegister={navigateToRegister} />}
            {showRegister && <RegisterScreen onNavigateToLogin={navigateToLogin} />}
        </div>
    );
};

export default App;
