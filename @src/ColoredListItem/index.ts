import * as CSSModules from 'react-css-modules';

import { ColoredListItem as ColoredListItemJsx, IColoredListItemProps } from './ColoredListItem';
import * as s from './style.m.scss';

const ColoredListItem = CSSModules(ColoredListItemJsx, s);

export { ColoredListItem, IColoredListItemProps };
