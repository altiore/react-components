import * as moment from 'moment';
import * as React from 'react';
import CSSModules = require('react-css-modules');
import * as s from './style.m.scss';

require('moment/locale/ru');
moment.locale('ru');

interface IActivityItemProps {
  delimiter?: boolean;
  description: string;
  time: Date;
  userName: string;
  userPic: string;
}

class ActivityItemJsx extends React.PureComponent<IActivityItemProps, any> {
  public render() {
    const { delimiter, description, time, userName, userPic } = this.props;

    return (
      <React.Fragment>
        <div styleName="activity-item">
          <div styleName="userpic">
            <img src={userPic} alt={userName} />
          </div>
          <div styleName="desciption">
            <b>{userName}</b> {description}
          </div>
          <div styleName="time">
            {moment(time)
              .startOf('second')
              .fromNow()}
          </div>
        </div>
        {delimiter && <hr />}
      </React.Fragment>
    );
  }
}

const ActivityItem = CSSModules(ActivityItemJsx, s);
export { ActivityItem };
