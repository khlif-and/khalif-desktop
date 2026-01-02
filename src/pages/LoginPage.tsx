import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/templates/AuthLayout';
import { LoginForm } from '../components/organisms/LoginForm';
import { PATHS } from '../routes/paths';

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToRegister = () => {
        navigate(PATHS.REGISTER);
    };

    const handleBack = () => {
        navigate(PATHS.ONBOARDING);
    };

    return (
        <AuthLayout onBack={handleBack}>
            <LoginForm onNavigateToRegister={handleNavigateToRegister} />
        </AuthLayout>
    );
};
