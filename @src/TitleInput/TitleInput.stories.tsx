import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { TitleInput } from './index';

storiesOf('Atoms/TitleInput', module).add('default', () => (
  <div style={{ width: 600 }}>
    <TitleInput
      input={{ value: 'Title Input', onBlur: action('onBlur'), onChange: action('onChange') } as WrappedFieldInputProps}
      label="Input label"
      meta={{} as WrappedFieldMetaProps}
      placeholder="(empty)"
    />

    <hr />

    <TitleInput
      input={{ value: 'Title Input', onBlur: action('onBlur'), onChange: action('onChange') } as WrappedFieldInputProps}
      meta={{} as WrappedFieldMetaProps}
      placeholder="(empty)"
    />

    <hr />

    <TitleInput
      icon={null}
      input={{ value: 'Title Input', onBlur: action('onBlur'), onChange: action('onChange') } as WrappedFieldInputProps}
      meta={{ touched: true, error: 'error' } as WrappedFieldMetaProps}
      placeholder="(empty)"
    />
  </div>
));
