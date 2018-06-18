import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
export interface ILoginFormProps {
    title?: string;
    buttonText?: string;
}
export declare class LoginForm extends React.Component<ILoginFormProps & InjectedFormProps<{}, ILoginFormProps>, object> {
    render(): JSX.Element;
}
