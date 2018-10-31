import * as CSSModules from 'react-css-modules';

import * as s from './style.m.scss';
import { TextArea as TextAreaRaw } from './TextArea';

const TextArea = CSSModules(TextAreaRaw, s);

export { TextArea, TextAreaRaw };
