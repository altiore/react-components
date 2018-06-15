import * as CSSModules from 'react-css-modules';

import { Input } from './Input';
import * as s from './style.m.scss';

const InputStyled = CSSModules(Input, s);
export { Input, InputStyled };
