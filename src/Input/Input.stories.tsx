import { storiesOf } from '@storybook/react';
import * as React from 'react'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form/lib/Field'
const FaLock = require('react-icons/lib/fa/lock');
const FaUser = require('react-icons/lib/fa/user');

import { action } from '@storybook/addon-actions'
import { InputStyled as Input } from './index'

storiesOf('Atoms/Input', module).add('default', () => (
  <form style={{ width: 300 }}>
    <Input
      input={{ name: 'username', onChange: action('changed') } as WrappedFieldInputProps}
      meta={{} as WrappedFieldMetaProps}
      placeholder={'Placeholder'}
      type="email"
      icon={<FaUser />}
    />
    <Input
      input={{ name: 'input', onChange: action('changed') } as WrappedFieldInputProps}
      meta={{ touched: true, error: 'Внимание ошибочка' } as WrappedFieldMetaProps}
      placeholder={'Placeholder'}
    />
    <Input
      input={{ name: 'input2', onChange: action('changed') } as WrappedFieldInputProps}
      meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
      placeholder={'Placeholder'}
    />
    <Input
      type='password'
      input={{ name: 'input3', onChange: action('changed') } as WrappedFieldInputProps}
      meta={{} as WrappedFieldMetaProps}
      showLabel={true}
      placeholder={'Placeholder'}
      icon={<FaLock />}
    />
  </form>
))
