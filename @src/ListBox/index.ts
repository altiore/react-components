import * as CSSModules from 'react-css-modules';

import { IListBoxProps, ListBox as ListBoxJsx } from './ListBox';
import * as s from './style.m.scss';

const ListBox = CSSModules(ListBoxJsx, s);

export { ListBox, IListBoxProps };
