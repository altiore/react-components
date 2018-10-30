import * as CSSModules from 'react-css-modules';

import { ActivityItem as ActivityItemJsx } from './ActivityItem';
import * as s from './style.m.scss';

export const ActivityItem = CSSModules(ActivityItemJsx, s);
