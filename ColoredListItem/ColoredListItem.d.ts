import * as React from 'react';
export interface IColoredListItemProps {
    item: {
        color: string;
        id?: any;
        title: string;
    };
    onClick?: (item: {
        color: string;
        title: string;
    }) => void;
}
export declare class ColoredListItem extends React.Component<IColoredListItemProps, any> {
    constructor(props: any);
    onClick(e: React.MouseEvent<Element>): void;
    render(): JSX.Element;
}
