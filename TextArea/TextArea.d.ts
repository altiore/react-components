import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import { WrappedFieldProps } from 'redux-form';
interface ITextAreaProps extends React.InputHTMLAttributes<any>, WrappedFieldProps {
    icon?: React.ReactElement<IconBaseProps>;
    title?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    editorClass?: string;
    wrapperClass?: string;
    styles?: {
        area: string;
        header: string;
        icon: string;
        title: string;
        wrapper: string;
        editor: string;
        active: string;
        inactive: string;
        editorError: string;
        editorWarning: string;
        error: string;
        warning: string;
    };
}
interface ITextAreaState {
    edit?: boolean;
}
declare class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
    static defaultProps: {
        placeholder: string;
    };
    constructor(props: ITextAreaProps);
    handleFocus(event: React.FocusEvent<any>): void;
    handleBlur(event: React.FocusEvent<any>): void;
    render(): JSX.Element | null;
}
export { TextArea, ITextAreaProps };
