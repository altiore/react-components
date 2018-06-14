import * as CSSModules from 'react-css-modules';

import { Button } from './Button';
import * as styles from './style.m.scss';

const ButtonStyled = CSSModules(Button, styles);

export { Button, ButtonStyled };
