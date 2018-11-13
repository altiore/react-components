import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaAlignJustify, FaThumbtack } from 'react-icons/fa';
import { Field, InjectedFormProps, reduxForm, WrappedFieldMetaProps } from 'redux-form';
import { FormDecorator } from '../../.storybook/decorators';
import { TextArea } from './index';

const group = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  flexGrow: 1,
  height: 500,
  justifyContent: 'space-around',
  margin: 20
};

const screen = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  width: '98%'
};

interface ITextAreaScreenData {
  task: string;
}

const TextAreaScreenJsx: React.SFC<InjectedFormProps<ITextAreaScreenData>> = ({ children, handleSubmit }) => (
  <form onSubmit={handleSubmit} style={screen}>
    {children}
  </form>
);

const TextAreaScreen = reduxForm<ITextAreaScreenData>({
  form: 'TextAreaScreen',
  initialValues: {
    task: 'Сделать простую текстарею'
  },
  onChange: action('changed')
})(TextAreaScreenJsx);

const TextAreaGroup: React.SFC<{}> = ({ children }) => <div style={group}>{children}</div>;

const MyTextArea: React.SFC<any> = ({ name, ...rest }) => (
  <Field name={name || 'empty'} component={TextArea} {...rest} />
);

storiesOf('Atoms/TextArea', module)
  .addDecorator(FormDecorator)
  .add('default', () => (
    <TextAreaScreen>
      <TextAreaGroup>
        <MyTextArea
          name={'description'}
          placeholder={'Введи ваше описание'}
          title={'Описание'}
          icon={<FaAlignJustify />}
        />

        <MyTextArea
          name={'task'}
          placeholder={'Введите вашу прекрасную задачу'}
          title={'Задача'}
          icon={<FaThumbtack />}
        />

        <MyTextArea icon={<FaThumbtack />} />
      </TextAreaGroup>
    </TextAreaScreen>
  ))
  .add('warning', () => (
    <TextAreaScreen>
      <TextAreaGroup>
        <MyTextArea
          name={'description'}
          placeholder={'Введи ваше описание'}
          title={'Описание'}
          meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
          icon={<FaAlignJustify />}
        />

        <MyTextArea
          name={'task'}
          placeholder={'Введите вашу прекрасную задачу'}
          title={'Задача'}
          meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
          icon={<FaThumbtack />}
        />

        <MyTextArea
          meta={{ touched: true, warning: 'Предупреждение' } as WrappedFieldMetaProps}
          icon={<FaThumbtack />}
        />
      </TextAreaGroup>
    </TextAreaScreen>
  ))
  .add('danger', () => (
    <TextAreaScreen>
      <TextAreaGroup>
        <MyTextArea
          name={'description'}
          placeholder={'Введи ваше описание'}
          title={'Описание'}
          meta={{ touched: true, error: 'Ошибочка' } as WrappedFieldMetaProps}
          icon={<FaAlignJustify />}
        />

        <MyTextArea
          name={'task'}
          placeholder={'Введите вашу прекрасную задачу'}
          title={'Задача'}
          meta={{ touched: true, error: 'Ошибочка' } as WrappedFieldMetaProps}
          icon={<FaThumbtack />}
        />

        <MyTextArea meta={{ touched: true, error: 'Ошибочка' } as WrappedFieldMetaProps} icon={<FaThumbtack />} />
      </TextAreaGroup>
    </TextAreaScreen>
  ));
