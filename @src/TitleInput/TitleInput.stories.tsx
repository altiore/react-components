import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaFile } from 'react-icons/fa';
import { MdInsertDriveFile } from 'react-icons/md';
import { TiDocument } from 'react-icons/ti';
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
            icon: <FaFile />,
            label: 'Input label',
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            icon: <FaFile />,
            label: 'Input label',
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            icon: <FaFile />,
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
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}

        <div style={{ width: 300, borderBottom: '1px solid black', marginTop: 20 }} />

        {React.createElement(
          MyForm({
            bold: true,
            placeholder: '(empty)',
            validate: [required(), length({ min: 3, max: 255 })],
            warning: [length({ min: 7 })]
          })
        )}
      </div>
    );
  })
  .add('icon', () => {
    return (
      <div>
        <div style={{ width: '300px', display: 'inline-block' }}>
          {React.createElement(
            MyForm({
              label: 'No icon',
              placeholder: '(empty)'
            })
          )}
        </div>

        <hr />

        <div style={{ width: '300px', display: 'inline-block' }}>
          {React.createElement(
            MyForm({
              icon: <FaFile size={16} />,
              label: 'Font Awesome Icons',
              placeholder: '(empty)'
            })
          )}
        </div>

        <hr />

        <div style={{ width: '300px', display: 'inline-block' }}>
          {React.createElement(
            MyForm({
              icon: <MdInsertDriveFile size={16} />,
              label: 'Material Icons',
              placeholder: '(empty)'
            })
          )}
        </div>

        <hr />

        <div style={{ width: '300px', display: 'inline-block' }}>
          {React.createElement(
            MyForm({
              icon: <TiDocument size={16} />,
              label: 'Typeicons',
              placeholder: '(empty)'
            })
          )}
        </div>

        <hr />

        <div style={{ width: '300px', display: 'inline-block' }}>
          {React.createElement(
            MyForm({
              icon: <InsertDriveFile fontSize={'small'} />,
              label: 'Material UI Icons',
              placeholder: '(empty)'
            })
          )}
        </div>
      </div>
    );
  });
