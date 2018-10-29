import * as React from 'react';
import { FaAlignJustify, FaClose } from 'react-icons/lib/fa';
import { Button } from '../Button';
import { ActivityList } from './ActivityList';
import { TaskCardHeader } from './TaskCardHeader';

export interface ITaskCardProps {
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
    const { isModal, title } = this.props;
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
                  <ul styleName="actions">
                    <li>
                      <Button type="submit" stretch primary>
                        <span>Участники</span>
                      </Button>
                    </li>
                    <li>
                      <Button type="submit" stretch primary>
                        <span>Метки</span>
                      </Button>
                    </li>
                    <li>
                      <Button type="submit" stretch primary>
                        <span>Контрольный список</span>
                      </Button>
                    </li>
                    <li>
                      <Button type="submit" stretch primary>
                        <span>Вложения</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
