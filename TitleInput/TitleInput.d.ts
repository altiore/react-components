import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
interface ITitleInputProps extends WrappedFieldProps {
    bold?: boolean;
    className?: string;
    classNameInput?: string;
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    label?: string;
    icon?: any;
    maxLength?: number;
    placeholder?: string;
    onSubmit?: () => void;
    getTextarea?: (ref: HTMLTextAreaElement) => void;
    styles?: any;
}
interface IState {
    height: number;
    previousValue: string;
}
declare class TitleInput extends React.Component<ITitleInputProps, IState> {
    static defaultProps: Partial<ITitleInputProps>;
    titleInputRef: any;
    setTitleInputRef: (el: any) => void;
    constructor(props: any);
    componentDidMount(): void;
    handleTextareaBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void;
    handleTextareaKeyUp(e: React.KeyboardEvent<HTMLTextAreaElement>): void;
    applyCurrentValue(): void;
    restorePreviousValue(): void;
    updateInputState(callback?: () => any): void;
    autoHeightTextarea(): void;
    render(): JSX.Element;
}
export { TitleInput, ITitleInputProps };
