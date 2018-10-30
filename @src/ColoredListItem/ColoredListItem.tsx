import * as React from 'react';

export interface IColoredListItemProps {
  item: { color: string; id?: any; title: string };
  onClick?: (item: { color: string; title: string }) => void;
}

export class ColoredListItem extends React.Component<IColoredListItemProps, any> {
  public constructor(props: any) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  public onClick(e: React.MouseEvent<Element>) {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(this.props.item);
    }
  }

  public render() {
    const { color, title } = this.props.item;

    return (
      <div styleName="colored-list-item" onClick={this.onClick}>
        <div styleName="bullet">
          <div styleName="circle" style={{ backgroundColor: color || 'transparent' }} />
        </div>
        <div styleName="title">{title}</div>
      </div>
    );
  }
}
