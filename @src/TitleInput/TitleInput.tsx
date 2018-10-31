import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
import { Key } from 'ts-keycode-enum';

const FaFileText = require('react-icons/lib/fa/file-text');

interface ITitleInputProps {
  wrapperClassName?: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  label?: string;
  icon?: any;
  maxLength?: number;
  placeholder?: string;
  onEnter?: () => void;
  getTextarea?: (ref: HTMLTextAreaElement) => void;
}

interface IState {
  currentValue: string;
  previousValue: string;
}

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
      previousValue: (this.props.input.value || '').trim()
    };
  }

  public componentDidMount() {
    this.autoHightTextarea();
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
    this.autoHightTextarea();
  }

  public handleTextareaFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.setState({
      previousValue: this.state.currentValue
    });
    this.autoHightTextarea();
  }

  public handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    switch (e.keyCode) {
      case Key.Enter:
        e.preventDefault();
        this.applyCurrentValue();
        if (this.props.onEnter) {
          this.props.onEnter();
        }
        break;

      case Key.Escape:
        e.preventDefault();
        this.restorePreviousValue();
        break;

      default:
        this.autoHightTextarea();
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
    this.updateInputState({
      currentValue: (this.state.currentValue || '').trim()
    });
  }

  public restorePreviousValue() {
    this.updateInputState({
      currentValue: (this.state.previousValue || '').trim()
    });
  }

  public updateInputState(state: object) {
    this.setState(state, () => {
      this.titleInputRef.blur();
      this.autoHightTextarea();
      if (this.state.currentValue !== this.state.previousValue) {
        this.setState({
          previousValue: this.state.currentValue
        });
        this.props.input.onChange(this.state.currentValue);
      }
    });
  }

  public autoHightTextarea() {
    this.titleInputRef.style.height = 'auto';
    this.titleInputRef.style.height = this.titleInputRef.scrollHeight + 'px';
  }

  public render() {
    const {
      wrapperClassName,
      icon,
      input,
      label,
      maxLength,
      meta: { touched, error, warning },
      placeholder
    } = this.props;

    return (
      <div styleName={wrapperClassName || ''}>
        <div styleName={'wrapper' + (label ? '-with-label' : '')}>
          {label && (
            <label htmlFor={input.name} className="label">
              {label || input.name}
            </label>
          )}
          <div styleName="input-wrapper">
            {icon && <div styleName="icon">{icon}</div>}
            <textarea
              styleName={icon ? ' with-icon' : ''}
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
          </div>
          {touched &&
            ((error && <span styleName="error">{error}</span>) ||
              (warning && <span styleName="warning">{warning}</span>))}
        </div>
      </div>
    );
  }
}

export { TitleInput, ITitleInputProps };
