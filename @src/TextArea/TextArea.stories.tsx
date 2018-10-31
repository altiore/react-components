import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import FaAlignJustify = require('react-icons/lib/fa/align-justify');
import FaThumbtack = require('react-icons/lib/fa/thumb-tack');
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form/lib/Field';
import { TextArea } from './index';

const block = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  flexGrow: 1,
  height: 500,
  justifyContent: 'space-around',
  margin: 20
};

storiesOf('Atoms/TextArea', module).add('default', () => (
  <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', width: '98%' }}>
    <div style={block}>
      <TextArea
        input={
          {
            name: 'description',
            onBlur: action('blur'),
            onChange: action('changed'),
            onFocus: action('focus')
          } as WrappedFieldInputProps
        }
        meta={{} as WrappedFieldMetaProps}
        title={'Описание'}
        placeholder={'Введи ваше описание'}
        icon={<FaAlignJustify />}
      />

      <TextArea
        input={{ name: 'task', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{} as WrappedFieldMetaProps}
        title={'Задача'}
        value={'Сделать простую текстарею'}
        placeholder={'Введите вашу прекраснужю задачу'}
        icon={<FaThumbtack />}
      />

      <TextArea
        input={{ name: 'empty', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{} as WrappedFieldMetaProps}
      />
    </div>

    <div style={block}>
      <TextArea
        input={{ name: 'description', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, error: 'Внимание ошибочка' } as WrappedFieldMetaProps}
        title={'Описание'}
        placeholder={'Введи ваше описание'}
        icon={<FaAlignJustify />}
      />

      <TextArea
        input={{ name: 'task', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, error: 'Внимание ошибочка' } as WrappedFieldMetaProps}
        title={'Задача'}
        value={'Сделать простую текстарею'}
        placeholder={'Введите вашу прекраснужю задачу'}
        icon={<FaThumbtack />}
      />

      <TextArea
        input={{ name: 'empty', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, error: 'Внимание ошибочка' } as WrappedFieldMetaProps}
      />
    </div>

    <div style={block}>
      <TextArea
        input={{ name: 'description', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
        title={'Описание'}
        placeholder={'Введи ваше описание'}
        icon={<FaAlignJustify />}
      />

      <TextArea
        input={{ name: 'task', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
        title={'Задача'}
        value={'Сделать простую текстарею'}
        placeholder={'Введите вашу прекраснужю задачу'}
        icon={<FaThumbtack />}
      />

      <TextArea
        input={{ name: 'empty', onChange: action('changed') } as WrappedFieldInputProps}
        meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
      />
    </div>
  </div>
));
