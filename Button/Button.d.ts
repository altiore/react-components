import * as React from 'react';
export interface IProps {
    children: string | JSX.Element;
    className?: string;
    danger?: boolean;
    disabled?: boolean;
    float?: boolean;
    isLoading?: boolean;
    little?: boolean;
    lg?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    primary?: boolean;
    secondary?: boolean;
    sm?: boolean;
    stretch?: boolean;
    styles?: {
        button: string;
        danger: string;
        float: string;
        little: string;
        lg: string;
        primary: string;
        secondary: string;
        sm: string;
        stretch: string;
        text: string;
        xs: string;
    };
    xs?: boolean;
}
export declare class Button extends React.PureComponent<IProps & React.ButtonHTMLAttributes<IProps>> {
    render(): JSX.Element | null;
}
