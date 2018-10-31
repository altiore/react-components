import * as React from 'react';
export interface ITaskCardProps {
    actions: JSX.Element[];
    title: string;
    isModal?: boolean;
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    activityList?: any;
}
export declare class TaskCard extends React.Component<ITaskCardProps, any> {
    constructor(props: any);
    handleCloseClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
