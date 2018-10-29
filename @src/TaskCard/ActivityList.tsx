import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { FaList } from 'react-icons/lib/fa';
import { ActivityItem } from '../ActivityItem';
import * as s from './style.m.scss';

interface IActivityListProps {
  list?: any;
  visible?: boolean;
}

interface IState {
  isVisible?: boolean;
  toggleActionTitle?: string;
}

class ActivityListJsx extends React.Component<IActivityListProps, IState> {
  public static defaultProps: Partial<IActivityListProps> = {
    visible: true
  };

  constructor(props: any) {
    super(props);

    this.handleToggleVisibleClick = this.handleToggleVisibleClick.bind(this);

    this.state = {
      isVisible: this.props.visible,
      toggleActionTitle: this.props.visible ? 'Скрыть' : 'Показать'
    };
  }

  public handleToggleVisibleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
      toggleActionTitle: this.state.isVisible ? 'Показать' : 'Скрыть'
    });
  }

  public render() {
    const { list } = this.props;
    const { isVisible, toggleActionTitle } = this.state;

    return (
      <div styleName="activity-list-container">
        <div styleName="header">
          <h3>
            <FaList /> Активность
          </h3>
          <a href="#" onClick={this.handleToggleVisibleClick}>
            {toggleActionTitle}
          </a>
        </div>
        {isVisible &&
          (list && list.length > 0 ? (
            <div styleName="list">{list.map((item: any, i: number) => <ActivityItem key={i} {...item} />)}</div>
          ) : (
            <div styleName="no-activity">Активности нет</div>
          ))}
      </div>
    );
  }
}

const ActivityList = CSSModules(ActivityListJsx, s);

export { ActivityList, IActivityListProps };
