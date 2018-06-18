import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ButtonStyled as Button } from './index';
const block = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  flexGrow: 1,
  height: 500,
  justifyContent: 'space-around',
  margin: 20,
}

storiesOf('Atoms/Button', module)
  .add('default buttons', () => (
    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', width: '100%'}}>
      <div style={block}>
        <Button disabled>Доход</Button>
        <Button>Доход</Button>
        <Button isLoading>Доход</Button>
        <Button stretch>Доход</Button>
      </div>

      <div style={block}>
        <Button danger disabled>Расход</Button>
        <Button danger>Расход</Button>
        <Button danger isLoading>Расход</Button>
        <Button danger stretch>Расход</Button>
      </div>

      <div style={block}>
        <Button secondary disabled>Закрыть</Button>
        <Button secondary>Закрыть</Button>
        <Button secondary isLoading>Закрыть</Button>
        <Button secondary stretch>Закрыть</Button>
      </div>
    </div>
  ))
