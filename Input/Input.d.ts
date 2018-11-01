import * as React from 'react';
import { IconBaseProps } from 'react-icon-base';
import { WrappedFieldProps } from 'redux-form/lib/Field';
export interface InputProps extends WrappedFieldProps {
    icon?: React.ReactElement<IconBaseProps>;
    inputClass?: string;
    showLabel?: boolean;
    type?: string;
    className?: string;
    label?: string;
    placeholder?: string;
    wrapperClass?: string;
    styles?: {
        main: string;
        inputError: string;
        inputIcon: string;
        inputWarning: string;
        inputWrapper: string;
        label: string;
        input: string;
        error: string;
        warning: string;
    };
}
export declare const Input: ({ input, label, showLabel, type, meta: { touched, error, warning }, styles, placeholder, inputClass, wrapperClass, icon, ...rest }: InputProps & WrappedFieldProps) => JSX.Element | null;
