import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ColoredListItem } from './index';

storiesOf('Atoms/ColoredListItem', module).add('default', () => (
  <ColoredListItem item={{ color: 'red', title: 'List item title' }} onClick={action('onClick')} />
));
