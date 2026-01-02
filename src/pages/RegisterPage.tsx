import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/templates/AuthLayout';
import { RegisterForm } from '../components/organisms/RegisterForm';
import { PATHS } from '../routes/paths';

export const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate(PATHS.LOGIN);
    };

    const handleBack = () => {
        navigate(PATHS.ONBOARDING);
    };

    return (
        <AuthLayout onBack={handleBack}>
            <RegisterForm onNavigateToLogin={handleNavigateToLogin} />
        </AuthLayout>
    );
};
