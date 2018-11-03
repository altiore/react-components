import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ActivityItem } from './index';

storiesOf('Atoms/ActivityItem', module).add('default', () => (
  <ActivityItem
    description="moved this card from Сделать to В работе"
    time="2 minutes ago"
    userName="brevis"
    userPic="https://trello-avatars.s3.amazonaws.com/04c45d1bc6a9cb7f8eda7f54f717f84b/30.png"
  />
));
