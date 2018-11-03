import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

import { Button } from '../Button';
import { Input } from '../Input';

export interface ILoginFormProps {
  title?: string;
  buttonText?: string;
  userIco: React.ReactNode;
  lockIco: React.ReactNode;
}

export class LoginForm extends React.Component<ILoginFormProps & InjectedFormProps<{}, ILoginFormProps>, object> {
  public render() {
    const { title, buttonText, handleSubmit, pristine, submitting, userIco, lockIco } = this.props;
    return (
      <div styleName="wrapper">
        <form styleName="form" onSubmit={handleSubmit}>
          {title && <h3 styleName="title">{title}</h3>}
          <Field name="email" component={Input as any} type="email" icon={userIco} />
          <Field name="password" component={Input as any} type="password" icon={lockIco} />
          <Button type="submit" stretch primary disabled={pristine || submitting} isLoading={submitting}>
            <span>{buttonText}</span>
          </Button>
        </form>
      </div>
    );
  }
}
