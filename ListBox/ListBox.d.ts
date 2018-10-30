import * as React from 'react';
import { IProps } from "../Button/Button";
export interface IListBoxProps {
    addNew?: boolean;
    filter?: boolean;
    flat?: boolean;
    items: object[];
    listItemComponent: React.ComponentClass;
    onSelect?: (item: {
        color: string;
        id?: any;
        title: string;
    }) => void;
    onAddNewClick?: (e: React.MouseEvent<Element & IProps>) => void;
}
interface IState {
    filterKw: string;
}
export declare class ListBox extends React.Component<IListBoxProps, IState> {
    static defaultProps: Partial<IListBoxProps>;
    constructor(props: any);
    onAddNewClick(e: React.MouseEvent<Element & IProps>): void;
    onFilterChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
