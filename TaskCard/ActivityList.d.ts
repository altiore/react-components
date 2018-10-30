import * as React from 'react';
interface IActivityListProps {
    list?: any;
    visible?: boolean;
}
interface IState {
    isVisible?: boolean;
    toggleActionTitle?: string;
}
declare class ActivityList extends React.Component<IActivityListProps, IState> {
    static defaultProps: Partial<IActivityListProps>;
    constructor(props: any);
    handleToggleVisibleClick(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export { ActivityList, IActivityListProps };
