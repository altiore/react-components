import * as CSSModules from 'react-css-modules';
import { Dropdown as DropdownJsx, DropdownIndicator as DropdownIndicatorJsx, Option as OptionJsx } from './Components';
import { SelectBox as SelectBoxJsx } from './SelectBox';
import * as s from './style.m.scss';

export const Dropdown = CSSModules(DropdownJsx, s);
export const DropdownIndicator = CSSModules(DropdownIndicatorJsx, s);
export const Option = CSSModules(OptionJsx, s);
export const SelectBox = CSSModules(SelectBoxJsx, s);
