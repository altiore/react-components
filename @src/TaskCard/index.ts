import * as CSSModules from 'react-css-modules';
import { ActivityList as ActivityListJsx, IActivityListProps } from './ActivityList';
import * as s from './style.m.scss';
import { ITaskCardProps, TaskCard as TaskCardJsx } from './TaskCard';

const ActivityList = CSSModules(ActivityListJsx, s);
const TaskCard = CSSModules(TaskCardJsx, s);

export { IActivityListProps, ActivityList, TaskCard, ITaskCardProps };
