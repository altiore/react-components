import * as CSSModules from 'react-css-modules';

import { ILoginFormProps, LoginForm as LoginFormJsx } from './LoginForm';
import * as s from './style.m.scss';

const LoginForm = CSSModules(LoginFormJsx, s);

export { LoginForm, ILoginFormProps };
