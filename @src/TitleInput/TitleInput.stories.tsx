import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { TitleInput } from './index';

storiesOf('Atoms/TitleInput', module).add('default', () => (
  <div style={{ width: 600 }}>
    <TitleInput
      input={
        {
          onBlur: action('onBlur'),
          onChange: action('onChange'),
          value: 'Title Input'
        } as WrappedFieldInputProps
      }
      label="Input label"
      meta={{} as WrappedFieldMetaProps}
      placeholder="(empty)"
    />

    <hr />

    <TitleInput
      input={
        {
          onBlur: action('onBlur'),
          onChange: action('onChange'),
          value: 'Title Input'
        } as WrappedFieldInputProps
      }
      meta={{} as WrappedFieldMetaProps}
      placeholder="(empty)"
    />

    <hr />

    <TitleInput
      icon={null}
      input={
        {
          onBlur: action('onBlur'),
          onChange: action('onChange'),
          value: 'Title Input'
        } as WrappedFieldInputProps
      }
      meta={{ touched: true, error: 'Some error message' } as WrappedFieldMetaProps}
      placeholder="(empty)"
      getTextarea={action('getTexarea')}
      onEnter={action('onEnter')}
    />
  </div>
));
