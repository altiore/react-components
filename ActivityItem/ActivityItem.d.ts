import * as React from 'react';
interface IActivityItemProps {
    delimiter?: boolean;
    description: string;
    time: Date;
    userName: string;
    userPic: string;
}
declare class ActivityItemJsx extends React.PureComponent<IActivityItemProps, any> {
    render(): JSX.Element;
}
declare const ActivityItem: typeof ActivityItemJsx;
export { ActivityItem };
