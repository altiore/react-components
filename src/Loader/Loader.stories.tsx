import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Loader } from './index';

storiesOf('Atoms/Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('size = 20', () => (
    <Loader size={20} />
  ))
  .add('color = blue', () => (
    <Loader color={'blue'} />
  ));