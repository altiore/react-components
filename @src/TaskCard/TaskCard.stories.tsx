import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TaskCard } from './index';

const defaultProps = {
  activityList: [
    {
      delimiter: true,
      description: 'moved this card from Сделать to В работе',
      time: new Date('2018-10-29T15:30:32.783Z'),
      userName: 'brevis',
      userPic: 'https://trello-avatars.s3.amazonaws.com/04c45d1bc6a9cb7f8eda7f54f717f84b/30.png'
    },
    {
      delimiter: true,
      description: 'added Задачи to this card',
      time: new Date('2018-10-29T08:14:22.041Z'),
      userName: 'Razzwan',
      userPic: 'https://trello-avatars.s3.amazonaws.com/5b2ca91771df0202d74ea7f272a844be/30.png'
    },
    {
      description: 'added this card to Сделать',
      time: new Date('2018-10-29T08:14:01.859Z'),
      userName: 'Razzwan',
      userPic: 'https://trello-avatars.s3.amazonaws.com/5b2ca91771df0202d74ea7f272a844be/30.png'
    }
  ]
};

storiesOf('Molecules/TaskCard', module)
  .add('default', () => <TaskCard {...defaultProps} title="Default Card" />)
  .add('modal', () => <TaskCard {...defaultProps} title="Modal Card" isModal={true} />);
