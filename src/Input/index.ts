import * as CSSModules from 'react-css-modules';

import { Input as InputRaw } from './Input';
import * as s from './style.m.scss';

const Input = CSSModules(InputRaw, s);
export { Input, InputRaw };
