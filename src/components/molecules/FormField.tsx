import React from 'react';
import { Input } from '../atoms/Input';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // Allows wrapping standard input props
    fullWidth?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ ...props }) => {
    return (
        <div>
            <Input {...props} />
        </div>
    );
};
