import * as cn from 'classnames';
import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
import { Key } from 'ts-keycode-enum';

interface ITitleInputProps extends WrappedFieldProps {
  bold?: boolean;
  className?: string;
  classNameInput?: string;
  input: WrappedFieldInputProps;
  inputRef?: any;
  meta: WrappedFieldMetaProps;
  label?: string;
  icon?: React.ReactNode;
  maxLength?: number;
  placeholder?: string;
  onSubmit?: () => void;
  getTextarea?: (ref: HTMLTextAreaElement) => void;
  styles?: any;
}

interface IState {
  height: number;
  previousValue: string;
}

const TEXT_HEIGHT = 34;
const ERROR_HEIGHT = 12;

class TitleInput extends React.Component<ITitleInputProps, IState> {
  public static defaultProps: Partial<ITitleInputProps> = {
    icon: undefined,
    maxLength: 500
  };

  public titleInputRef: any;
  public setTitleInputRef: (el: any) => void;

  constructor(props: any) {
    super(props);

    this.titleInputRef = null;
    this.setTitleInputRef = element => {
      if (this.props.inputRef) {
        this.props.inputRef(element);
      }
      this.titleInputRef = element;
    };

    this.handleTextareaBlur = this.handleTextareaBlur.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleTextareaFocus = this.handleTextareaFocus.bind(this);
    this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);
    this.handleTextareaKeyUp = this.handleTextareaKeyUp.bind(this);

    this.state = {
      height: TEXT_HEIGHT,
      previousValue: (this.props.input.value || '').trim()
    };
  }

  public componentDidMount() {
    this.autoHeightTextarea();
    if (this.props.getTextarea) {
      this.props.getTextarea(this.titleInputRef);
    }
  }

  public handleTextareaBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.applyCurrentValue();
    this.props.input.onBlur(e);
  }

  public handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    this.props.input.onChange(e.target.value);
    this.autoHeightTextarea();
  }

  public handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.autoHeightTextarea();
  }

  public handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.keyCode) {
      case Key.Enter:
        e.preventDefault();
        this.applyCurrentValue();
        break;

      case Key.Escape:
        e.preventDefault();
        this.restorePreviousValue();
        break;

      default:
        this.autoHeightTextarea();
        break;
    }
  }

  public handleTextareaKeyUp(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.keyCode === Key.Enter) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  public applyCurrentValue() {
    this.updateInputState(() => {
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    });
  }

  public restorePreviousValue() {
    this.titleInputRef.blur();
    this.autoHeightTextarea();
    if (this.props.input.value !== this.state.previousValue) {
      this.props.input.onChange(this.state.previousValue);
    }
  }

  public updateInputState(callback?: () => any) {
    this.titleInputRef.blur();
    if (this.props.input.value !== this.state.previousValue) {
      this.setState({
        previousValue: this.props.input.value
      });
      if (callback) {
        callback();
      }
    }
  }

  public autoHeightTextarea() {
    this.titleInputRef.style.height = 'auto';
    if (this.titleInputRef.scrollHeight > TEXT_HEIGHT) {
      this.titleInputRef.style.height = this.titleInputRef.scrollHeight + 'px';
      this.setState({ height: this.titleInputRef.scrollHeight + ERROR_HEIGHT });
    } else {
      this.titleInputRef.style.height = TEXT_HEIGHT + 'px';
      this.setState({ height: TEXT_HEIGHT + ERROR_HEIGHT });
    }
  }

  public render() {
    const {
      bold,
      className,
      classNameInput,
      icon,
      input,
      label,
      maxLength,
      meta: { touched, error, warning },
      placeholder,
      styles
    } = this.props;

    const wrapperHeight = this.state.height;
    return (
      <div
        className={cn(styles.wrapper, {
          [`${className}`]: !!className
        })}
        style={{ height: label ? wrapperHeight + 19 : wrapperHeight }}
      >
        {label && (
          <label htmlFor={input.name} className="label">
            {label || input.name}
          </label>
        )}
        <div styleName={'input-wrapper'} style={{ height: wrapperHeight }}>
          {icon && <div styleName="icon">{icon}</div>}
          <textarea
            className={cn(styles.textarea, classNameInput, {
              [styles.bold]: bold,
              [styles['with-icon']]: !!icon
            })}
            {...input}
            maxLength={maxLength}
            placeholder={placeholder}
            ref={this.setTitleInputRef}
            rows={1}
            onBlur={this.handleTextareaBlur}
            onChange={this.handleTextareaChange}
            onFocus={this.handleTextareaFocus}
            onKeyDown={this.handleTextareaKeyDown}
          />
          {touched &&
            ((error && (
              <span
                className={cn(styles.error, {
                  [styles['with-icon']]: !!icon
                })}
              >
                {error}
              </span>
            )) ||
              (warning && (
                <span
                  className={cn(styles.warning, {
                    [styles['with-icon']]: !!icon
                  })}
                >
                  {warning}
                </span>
              )))}
        </div>
      </div>
    );
  }
}

export { TitleInput, ITitleInputProps };
