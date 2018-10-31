import * as CSSModules from 'react-css-modules';
import * as s from './style.m.scss';
import { ITitleInputProps, TitleInput as TitleInputJsx } from './TitleInput';

const TitleInput = CSSModules(TitleInputJsx, s);

export { TitleInput, ITitleInputProps };
