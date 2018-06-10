import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button } from './index';

storiesOf('Atoms/Button', module)
  .add('default buttons', () => (
    <div>
      <Button>Default</Button>
      <Button little>Little Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button secondary little>
        Secondary Button
      </Button>
      <Button stretch>Stretch Button</Button>
    </div>
  ))
  .add('isLoading buttons', () => (
    <div>
      <Button isLoading>Default</Button>
      <Button isLoading little>
        Little Button
      </Button>
      <Button isLoading secondary>
        Secondary Button
      </Button>
      <Button isLoading secondary little>
        Secondary Button
      </Button>
      <Button isLoading stretch>
        Stretch Button
      </Button>
    </div>
  ))
  .add('disabled buttons', () => (
    <div>
      <Button disabled>Default</Button>
      <Button disabled little>
        Little Button
      </Button>
      <Button disabled secondary>
        Secondary Button
      </Button>
      <Button disabled secondary little>
        Secondary Button
      </Button>
      <Button disabled stretch>
        Stretch Button
      </Button>
    </div>
  ));
