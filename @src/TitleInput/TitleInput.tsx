import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
import { Key } from 'ts-keycode-enum';

const FaFileText = require('react-icons/lib/fa/file-text');

interface ITitleInputProps {
  className?: string;
  classNameInput?: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  label?: string;
  icon?: any;
  maxLength?: number;
  placeholder?: string;
  onSubmit?: () => void;
  getTextarea?: (ref: HTMLTextAreaElement) => void;
}

interface IState {
  currentValue: string;
  height: number;
  previousValue: string;
}

const TEXT_HEIGHT = 34;
const ERROR_HEIGHT = 12;

class TitleInput extends React.Component<ITitleInputProps & WrappedFieldProps, IState> {
  public static defaultProps: Partial<ITitleInputProps> = {
    icon: <FaFileText />,
    maxLength: 500
  };

  public titleInputRef: any;
  public setTitleInputRef: (el: any) => void;

  constructor(props: any) {
    super(props);

    this.titleInputRef = null;
    this.setTitleInputRef = element => {
      this.titleInputRef = element;
    };

    this.handleTextareaBlur = this.handleTextareaBlur.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleTextareaFocus = this.handleTextareaFocus.bind(this);
    this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);
    this.handleTextareaKeyUp = this.handleTextareaKeyUp.bind(this);

    this.state = {
      currentValue: (this.props.input.value || '').trim(),
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
    this.setState({
      currentValue: e.currentTarget.value
    });
    this.autoHeightTextarea();
  }

  public handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.setState({
      previousValue: this.state.currentValue
    });
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
    this.updateInputState(
      {
        currentValue: (this.state.currentValue || '').trim()
      },
      () => {
        if (this.props.onSubmit) {
          this.props.onSubmit();
        }
      }
    );
  }

  public restorePreviousValue() {
    this.updateInputState({
      currentValue: (this.state.previousValue || '').trim()
    });
  }

  public updateInputState(state: object, callback?: () => any) {
    this.setState(state, () => {
      this.titleInputRef.blur();
      this.autoHeightTextarea();
      if (this.state.currentValue !== this.state.previousValue) {
        this.setState({
          previousValue: this.state.currentValue
        });
        this.props.input.onChange(this.state.currentValue);
        if (callback) {
          callback();
        }
      }
    });
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
      className,
      classNameInput,
      icon,
      input,
      label,
      maxLength,
      meta: { touched, error, warning },
      placeholder
    } = this.props;

    const wrapperHeight = this.state.height;
    return (
      <div
        styleName={'wrapper'}
        className={className || ''}
        style={{ height: label ? wrapperHeight + 19 : wrapperHeight }}
      >
        {label && (
          <label htmlFor={input.name} className="label">
            {label || input.name}
          </label>
        )}
        <div styleName="input-wrapper" style={{ height: wrapperHeight }}>
          {icon && <div styleName="icon">{icon}</div>}
          <textarea
            styleName={icon ? 'with-icon' : ''}
            className={classNameInput || ''}
            {...input}
            maxLength={maxLength}
            value={this.state.currentValue}
            placeholder={placeholder}
            ref={this.setTitleInputRef}
            rows={1}
            onBlur={this.handleTextareaBlur}
            onChange={this.handleTextareaChange}
            onFocus={this.handleTextareaFocus}
            onKeyDown={this.handleTextareaKeyDown}
          />
          {touched &&
            ((error && <span styleName="error">{error}</span>) ||
              (warning && <span styleName="warning">{warning}</span>))}
        </div>
      </div>
    );
  }
}

export { TitleInput, ITitleInputProps };
