import * as React from 'react';
export interface IProps {
    children: string | JSX.Element;
    className?: string;
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
export declare class Button extends React.PureComponent<IProps> {
    render(): JSX.Element | null;
}
