import * as CSSModules from 'react-css-modules';

import * as s from './style.m.scss';
import { ITaskCardProps, TaskCard as TaskCardJsx } from './TaskCard';

const TaskCard = CSSModules(TaskCardJsx, s);

export { TaskCard, ITaskCardProps };
