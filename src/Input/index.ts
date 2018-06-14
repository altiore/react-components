import * as CSSModules from 'react-css-modules';

import { Input, InputProps } from './Input';
import * as s from './style.m.scss';

const InputStyled = CSSModules(Input, s);
export { Input, InputStyled, InputProps };
