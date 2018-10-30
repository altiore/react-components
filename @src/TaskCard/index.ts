import * as CSSModules from 'react-css-modules';
import { ActivityList as ActivityListJsx, IActivityListProps } from './ActivityList';
import * as s from './style.m.scss';
import { ITaskCardProps, TaskCard as TaskCardJsx } from './TaskCard';
import { ITaskCardHeaderProps, TaskCardHeader as TaskCardHeaderJsx } from './TaskCardHeader';

const ActivityList = CSSModules(ActivityListJsx, s);
const TaskCard = CSSModules(TaskCardJsx, s);
const TaskCardHeader = CSSModules(TaskCardHeaderJsx, s);

export { IActivityListProps, ActivityList, TaskCard, ITaskCardProps, ITaskCardHeaderProps, TaskCardHeader };
