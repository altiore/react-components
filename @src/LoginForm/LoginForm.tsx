import * as React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Field, InjectedFormProps } from 'redux-form';

import { Button } from '../Button';
import { Input } from '../Input';

export interface ILoginFormProps {
  title?: string;
  buttonText?: string;
}

export class LoginForm extends React.Component<ILoginFormProps & InjectedFormProps<{}, ILoginFormProps>, object> {
  public render() {
    const { title, buttonText, handleSubmit, pristine, submitting } = this.props;
    return (
      <div styleName="wrapper">
        <form styleName="form" onSubmit={handleSubmit}>
          {title && <h3 styleName="title">{title}</h3>}
          <Field name="email" component={Input as any} type="email" icon={<FaUser />} />
          <Field name="password" component={Input as any} type="password" icon={<FaLock />} />
          <Button type="submit" stretch primary disabled={pristine || submitting} isLoading={submitting}>
            <span>{buttonText}</span>
          </Button>
        </form>
      </div>
    );
  }
}
