import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { length, required } from 'redux-form-validators';

import { FormDecorator } from '../../.storybook/decorators';
import { TitleInput } from './index';

const MyFormJsx = (props: any) => ({ handleSubmit }: any) => (
  <form onSubmit={handleSubmit}>
    <Field name={'test'} component={TitleInput} {...props} />
  </form>
);

const MyForm = (props: any) =>
  reduxForm({
    form: 'FormName',
    onSubmit: action('submit')
  })(MyFormJsx(props));

storiesOf('Atoms/TitleInput', module)
  .addDecorator(FormDecorator)
  .add('default', () => {
    return (
      <div style={{ width: 600 }}>
        {React.createElement(
          MyForm({
            label: 'Input label',
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            label: 'Input label',
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            icon: null,
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            icon: null,
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            bold: true,
            icon: null,
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}
      </div>
    );
  });
