import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormDecorator } from '../../.storybook/decorators';
import { ListBox } from './index';

const faker = require('faker');

const projects: object[] = [];
for (let i = 1; i <= 15; i++) {
  projects.push({
    icon: <span styleName="pic-small" style={{ backgroundColor: '#' + (((i + 1) % 20) * 200).toString(16) }} />,
    label: faker.company.companyName(),
    value: `project${i}`
  });
}

const members: object[] = [];
for (let i = 1; i <= 50; i++) {
  members.push({
    icon: <img styleName="pic" src={faker.image.avatar()} />,
    label: faker.name.findName(),
    value: `member${i}`
  });
}

const blockStyles = {
  display: 'inline-block',
  margin: '10px 0',
  padding: '10px',
  verticalAlign: 'top'
};

const filterItem = (filterKw: string, item: any) => item.label.toLowerCase().indexOf(filterKw.toLowerCase()) === 0;

const getLabel = (option: any) => (
  <div>
    <span className="icon">{option.icon}</span> {option.label}
  </div>
);

const ListBoxForm = (props: any) => ({ handleSubmit }: any) => (
  <form onSubmit={handleSubmit}>
    <Field name={'test'} component={ListBox} {...props} />
  </form>
);

const ProjectForm = (props: any) =>
  reduxForm({
    form: 'ProjectForm',
    onChange: action('change')
  })(ListBoxForm(props));

const MembersForm = (props: any) =>
  reduxForm({
    form: 'MembersForm',
    onChange: action('change')
  })(ListBoxForm(props));

storiesOf('Atoms/ListBox', module)
  .addDecorator(FormDecorator)
  .add('default', () => (
    <div>
      <div style={blockStyles}>
        {React.createElement(
          ProjectForm({
            filterItem,
            getItemLabel: getLabel,
            items: projects,
            label: 'Проект',
            onClose: action('onClose'),
            showFilter: true
          })
        )}
      </div>

      <div style={blockStyles}>
        {React.createElement(
          MembersForm({
            filterItem,
            getItemLabel: getLabel,
            isMulti: true,
            items: members,
            label: 'Пользователи',
            onClose: action('onClose'),
            showFilter: true
          })
        )}
      </div>
    </div>
  ));
