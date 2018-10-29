import * as React from 'react';
interface ITaskCardHeaderProps {
    icon?: any;
    maxLength?: number;
    title?: string;
    onChange?: (title: string) => void;
}
interface IState {
    isEdit: boolean;
    title: string;
    titlePrevious: string;
}
declare class TaskCardHeaderJsx extends React.Component<ITaskCardHeaderProps, IState> {
    static defaultProps: Partial<ITaskCardHeaderProps>;
    TitleInput: any;
    setTitleInputRef: (el: any) => void;
    constructor(props: any);
    componentDidMount(): void;
    handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void;
    autoHightTextarea(): void;
    render(): JSX.Element;
}
declare const TaskCardHeader: typeof TaskCardHeaderJsx;
export { TaskCardHeader, ITaskCardHeaderProps };
