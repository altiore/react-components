import * as cn from 'classnames';
import * as React from 'react';
import { IconBaseProps } from 'react-icon-base';
import { WrappedFieldProps } from 'redux-form';

interface ITextAreaProps extends React.InputHTMLAttributes<any>, WrappedFieldProps {
  icon?: React.ReactElement<IconBaseProps>;
  title?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  editorClass?: string;
  wrapperClass?: string;
  styles?: {
    area: string;
    header: string;
    icon: string;
    title: string;
    wrapper: string;
    editor: string;
    active: string;
    inactive: string;
    editorError: string;
    editorWarning: string;
    error: string;
    warning: string;
  };
}

interface ITextAreaState {
  edit?: boolean;
}

class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
  public static defaultProps = {
    placeholder: 'Введите ваш текст'
  };

  constructor(props: ITextAreaProps) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      edit: false
    };
  }

  public handleFocus(event: React.FocusEvent<any>) {
    const handler = this.props.input.onFocus;

    if (handler) {
      handler(event);
    }

    this.setState({ edit: true });
  }

  public handleBlur(event: React.FocusEvent<any>) {
    const handler = this.props.input.onBlur;

    if (handler) {
      handler(event);
    }

    this.setState({ edit: false });
  }

  public render() {
    const { edit } = this.state;
    const {
      styles,
      icon,
      title,
      input,
      value,
      placeholder,
      className,
      wrapperClass,
      editorClass,
      meta: { touched, error, warning },
      ...rest
    } = this.props;

    if (!styles) {
      return null;
    }

    return (
      <div className={cn(styles.area, className)}>
        {icon &&
          title && (
            <div className={styles.header}>
              <span className={styles.icon}>{icon}</span>
              <h3 className={styles.title}>{title}</h3>
            </div>
          )}
        <div
          className={cn(wrapperClass, {
            [styles.wrapper]: !!icon && !!title
          })}
        >
          <textarea
            {...rest}
            {...input}
            className={cn(styles.editor, editorClass, {
              [styles.active]: edit,
              [styles.inactive]: !edit && !value,
              [styles.editorError]: touched && !!error,
              [styles.editorWarning]: touched && !!warning
            })}
            defaultValue={value || placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {touched &&
            ((error && <span className={styles.error}>{error}</span>) ||
              (warning && <span className={styles.warning}>{warning}</span>))}
        </div>
      </div>
    );
  }
}

export { TextArea, ITextAreaProps };
