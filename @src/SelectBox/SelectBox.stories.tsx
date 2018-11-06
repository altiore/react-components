import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaUser } from 'react-icons/fa';
import { Field, reduxForm } from 'redux-form';
import { FormDecorator } from '../../.storybook/decorators';
import { SelectBox } from './index';

const MyFormJsx = (props: any) => ({ handleSubmit }: any) => (
  <form onSubmit={handleSubmit}>
    <Field name={'test'} component={SelectBox} {...props} />
  </form>
);

const SimpleProjectForm = (props: any) =>
  reduxForm({
    form: 'SimpleProjectForm',
    onChange: action('change')
  })(MyFormJsx(props));

const SimpleMemberForm = (props: any) =>
  reduxForm({
    form: 'SimpleMemberForm',
    onChange: action('change')
  })(MyFormJsx(props));

const MultiProjectsForm = (props: any) =>
  reduxForm({
    form: 'MultiProjectsForm',
    onChange: action('change')
  })(MyFormJsx(props));

const members: Array<{ label: JSX.Element; value: string }> = [];
for (let i = 1; i <= 10; i++) {
  members.push({
    label: (
      <span styleName="label">
        <img styleName="pic" src={`https://api.adorable.io/avatars/40/member${i}.png`} /> Member {i}
      </span>
    ),
    value: 'member' + i
  });
}

const projects: Array<{ label: JSX.Element; value: string }> = [];
for (let i = 1; i <= 10; i++) {
  projects.push({
    label: (
      <span styleName="label">
        <span styleName="pic-small" style={{ backgroundColor: '#' + (i * 400).toString(16) }} /> Project {i}
      </span>
    ),
    value: 'project' + i
  });
}

storiesOf('Atoms/SelectBox', module)
  .addDecorator(FormDecorator)
  .add('default', () => (
    <div style={{ padding: '20px' }}>
      {React.createElement(
        SimpleProjectForm({
          isHeader: true,
          isMulti: false,
          isSearchable: true,
          label: 'Project',
          options: projects,
          placeholder: 'Search...'
        })
      )}

      <hr />

      {React.createElement(
        SimpleMemberForm({
          icon: <FaUser />,
          isHeader: false,
          isMulti: false,
          isSearchable: false,
          label: 'Member',
          options: members
        })
      )}

      <hr />

      {React.createElement(
        MultiProjectsForm({
          icon: <FaUser />,
          isHeader: true,
          isMulti: true,
          isSearchable: true,
          label: 'Members',
          options: members,
          placeholder: 'Search...'
        })
      )}
    </div>
  ));
