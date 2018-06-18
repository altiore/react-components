import * as CSSModules from 'react-css-modules';

import { Button as ButtonRaw } from './Button';
import * as styles from './style.m.scss';

const Button = CSSModules(ButtonRaw, styles);

export { Button, ButtonRaw };
