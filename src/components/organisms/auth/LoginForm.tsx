import React from 'react';
import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';
import { FormField } from '../../molecules/FormField';
import { SocialLoginButton } from '../../molecules/SocialLoginButton';
import { AuthSeparator } from '../../molecules/AuthSeparator';

interface LoginFormProps {
    onNavigateToRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onNavigateToRegister }) => {
    return (
        // UBAH DISINI:
        // 1. 'min-h-screen' & 'w-full': Agar container memenuhi seluruh layar.
        // 2. 'flex items-center justify-center': Agar konten di dalamnya dipaksa ke tengah-tengah persis.
        // 3. Hapus 'md:w-7/12' dan 'px-24' yang membuat layout sebelumnya berat sebelah.
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0D111D] text-white px-4">

            {/* Container form dibatasi lebarnya agar tetap rapi */}
            <div className="max-w-md w-full space-y-8">

                {/* Header (Opsional: text-center agar judul juga di tengah) */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Log In</h2>
                    <p className="text-gray-400 text-sm">
                        Don't have an account?{' '}
                        <button onClick={onNavigateToRegister} className="text-white hover:underline cursor-pointer">
                            Register
                        </button>
                    </p>
                </div>

                <form className="space-y-4">
                    <FormField type="email" placeholder="Email" />
                    <FormField type="password" placeholder="Enter your password" />

                    {/* Layout Remember Me & Forgot Password */}
                    <div className="flex flex-wrap items-center justify-between mt-4 gap-y-2">
                        <div className="whitespace-nowrap flex items-center">
                            <Checkbox id="remember" label="Remember me" />
                        </div>
                        <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 whitespace-nowrap">
                            Forgot Password?
                        </a>
                    </div>

                    <Button type="button" fullWidth className="mt-6" onClick={() => window.location.hash = '/home'}>
                        Log In
                    </Button>
                </form>

                <AuthSeparator text="Or log in with" />

                <div className="grid grid-cols-2 gap-4">
                    <SocialLoginButton provider="google" />
                    <SocialLoginButton provider="apple" />
                </div>
            </div>
        </div>
    );
};