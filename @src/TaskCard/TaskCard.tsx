import * as React from 'react';
const FaClose = require('react-icons/lib/fa/close');
const FaAlignJustify = require('react-icons/lib/fa/align-justify');

import { ActivityList, TaskCardHeader } from './index';

export interface ITaskCardProps {
  actions: JSX.Element[];
  title: string;
  isModal?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  activityList?: any;
}

export class TaskCard extends React.Component<ITaskCardProps, any> {
  constructor(props: any) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  public handleCloseClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    }
  }

  public render() {
    const { actions, isModal, title } = this.props;
    return (
      <React.Fragment>
        {isModal && <div styleName="body-overlay" />}
        <div styleName={isModal ? 'task-card-wrapper-modal' : undefined}>
          <div styleName="task-card">
            <TaskCardHeader title={title} />

            <a href="#" styleName="button-close" onClick={this.handleCloseClick}>
              <FaClose />
            </a>

            <div styleName="task-details-container">
              <div styleName="task-details">
                <div styleName="container">
                  <h3>
                    <FaAlignJustify /> Детали
                  </h3>
                  <div styleName="details-container" />
                </div>

                <div styleName="container">
                  <ActivityList list={this.props.activityList} />
                </div>
              </div>

              <div styleName="actions">
                {/*demo data*/}
                <div styleName="action-block">
                  <h3>Действия</h3>
                  <ul styleName="actions">{actions.map(action => <li>{action}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
