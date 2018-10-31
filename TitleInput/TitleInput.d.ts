import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
interface ITitleInputProps {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    label?: string;
    icon?: any;
    maxLength?: number;
    placeholder?: string;
}
interface IState {
    currentValue: string;
    previousValue: string;
}
declare class TitleInput extends React.Component<ITitleInputProps & WrappedFieldProps, IState> {
    static defaultProps: Partial<ITitleInputProps>;
    TitleInput: any;
    setTitleInputRef: (el: any) => void;
    constructor(props: any);
    componentDidMount(): void;
    handleTextareaBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void;
    applyCurrentValue(): void;
    restorePreviousValue(): void;
    updateInputState(state: object): void;
    autoHightTextarea(): void;
    render(): JSX.Element;
}
export { TitleInput, ITitleInputProps };
