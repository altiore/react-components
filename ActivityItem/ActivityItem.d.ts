import * as React from 'react';
interface IActivityItemProps {
    delimiter?: boolean;
    description: string;
    time: Date;
    userName: string;
    userPic: string;
}
export declare class ActivityItem extends React.PureComponent<IActivityItemProps, any> {
    static defaultProps: Partial<IActivityItemProps>;
    render(): JSX.Element;
}
export {};
