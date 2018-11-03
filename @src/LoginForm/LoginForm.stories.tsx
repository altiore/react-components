import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { reduxForm } from 'redux-form';

import { FormDecorator } from '../../.storybook/decorators';
import { ILoginFormProps, LoginForm } from './index';

const MyForm = reduxForm<{}, ILoginFormProps>({
  form: 'FormName'
})(LoginForm);

storiesOf('Molecules/LoginForm', module)
  .addDecorator(FormDecorator)
  .add('default', () => <MyForm title="Форма входа" buttonText="Войти" userIco={<FaUser />} lockIco={<FaLock />} />);
