import React from 'react';
import { Button } from '../atoms/Button';
import { Checkbox } from '../atoms/Checkbox';
import { FormField } from '../molecules/FormField';
import { SocialLoginButton } from '../molecules/SocialLoginButton';
import { AuthSeparator } from '../molecules/AuthSeparator';

interface RegisterFormProps {
    onNavigateToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onNavigateToLogin }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0D111D] text-white px-4">
            <div className="max-w-md w-full mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                    <p className="text-gray-400 text-sm">
                        Already have an account?{' '}
                        <button onClick={onNavigateToLogin} className="text-white hover:underline cursor-pointer">
                            Login
                        </button>
                    </p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField type="text" placeholder="First name" />
                        <FormField type="text" placeholder="Last name" />
                    </div>

                    <FormField type="email" placeholder="Email" />
                    <FormField type="password" placeholder="Enter your password" />

                    <div className="flex items-center gap-2 mt-4">
                        <Checkbox
                            id="terms"
                            label={
                                <>
                                    I agree to the{' '}
                                    <a href="#" className="text-indigo-400 hover:text-indigo-300">
                                        Terms & Conditions
                                    </a>
                                </>
                            }
                        />
                    </div>

                    <Button type="button" fullWidth className="mt-6">
                        Create Account
                    </Button>
                </form>

                <AuthSeparator text="Or register with" />

                <div className="grid grid-cols-2 gap-4">
                    <SocialLoginButton provider="google" />
                    <SocialLoginButton provider="apple" />
                </div>
            </div>
        </div>
    );
};