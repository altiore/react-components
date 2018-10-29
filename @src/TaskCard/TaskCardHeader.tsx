import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import { FaFileText } from 'react-icons/lib/fa';
import { Key } from 'ts-keycode-enum';
import * as s from './style.m.scss';

interface ITaskCardHeaderProps {
  icon?: any;
  maxLength?: number;
  title?: string;
  onChange?: (title: string) => void;
}

interface IState {
  isEdit: boolean;
  title: string;
  titlePrevious: string;
}

class TaskCardHeaderJsx extends React.Component<ITaskCardHeaderProps, IState> {
  public static defaultProps: Partial<ITaskCardHeaderProps> = {
    icon: <FaFileText />,
    maxLength: 500
  };

  public TitleInput: any;
  public setTitleInputRef: (el: any) => void;

  constructor(props: any) {
    super(props);

    this.TitleInput = null;
    this.setTitleInputRef = element => {
      this.TitleInput = element;
    };

    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleTextareaFocus = this.handleTextareaFocus.bind(this);
    this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);

    this.state = {
      isEdit: false,
      title: (this.props.title || '').trim(),
      titlePrevious: (this.props.title || '').trim()
    };
  }

  public componentDidMount() {
    this.autoHightTextarea();
  }

  public handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      title: e.currentTarget.value
    });
    this.autoHightTextarea();
  }

  public handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.setState({
      titlePrevious: this.state.title
    });
    this.autoHightTextarea();
  }

  public handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ([Key.Enter, Key.Escape].indexOf(e.keyCode) !== -1) {
      const props = {
        isEdit: false,
        title: this.state.titlePrevious
      };
      if (e.keyCode === Key.Enter) {
        props.title = (this.state.title || '').trim();
      }
      this.setState(props, () => {
        this.TitleInput.blur();
        this.autoHightTextarea();
        if (this.state.title !== this.state.titlePrevious && this.props.onChange) {
          this.props.onChange(this.state.title);
        }
      });
    }

    this.autoHightTextarea();
  }

  public autoHightTextarea() {
    this.TitleInput.style.height = 'auto';
    this.TitleInput.style.height = this.TitleInput.scrollHeight + 'px';
  }

  public render() {
    const { icon, maxLength } = this.props;

    return (
      <div styleName="task-card-header">
        {icon || null}
        <textarea
          value={this.state.title}
          maxLength={maxLength}
          placeholder="(empty)"
          ref={this.setTitleInputRef}
          rows={1}
          onChange={this.handleTextareaChange}
          onFocus={this.handleTextareaFocus}
          onKeyDown={this.handleTextareaKeyDown}
        />
      </div>
    );
  }
}

const TaskCardHeader = CSSModules(TaskCardHeaderJsx, s);

export { TaskCardHeader, ITaskCardHeaderProps };
