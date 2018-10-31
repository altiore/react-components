import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field';
import { Key } from 'ts-keycode-enum';

const FaFileText = require('react-icons/lib/fa/file-text');

interface ITitleInputProps {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  label?: string;
  icon?: any;
  maxLength?: number;
  placeholder?: string;
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

  public TitleInput: any;
  public setTitleInputRef: (el: any) => void;

  constructor(props: any) {
    super(props);

    this.TitleInput = null;
    this.setTitleInputRef = element => {
      this.TitleInput = element;
    };

    this.handleTextareaBlur = this.handleTextareaBlur.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleTextareaFocus = this.handleTextareaFocus.bind(this);
    this.handleTextareaKeyDown = this.handleTextareaKeyDown.bind(this);

    this.state = {
      currentValue: (this.props.input.value || '').trim(),
      previousValue: (this.props.input.value || '').trim()
    };
  }

  public componentDidMount() {
    this.autoHightTextarea();
  }

  public handleTextareaBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    this.applyCurrentValue();
    this.props.input.onBlur(e);
  }

  public handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
        this.applyCurrentValue();
        break;

      case Key.Escape:
        this.restorePreviousValue();
        break;

      default:
        this.autoHightTextarea();
        break;
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
      this.TitleInput.blur();
      this.autoHightTextarea();
      if (this.state.currentValue !== this.state.previousValue) {
        this.props.input.onChange(this.state.currentValue);
      }
    });
  }

  public autoHightTextarea() {
    this.TitleInput.style.height = 'auto';
    this.TitleInput.style.height = this.TitleInput.scrollHeight + 'px';
  }

  public render() {
    const { icon, input, label, maxLength, placeholder } = this.props;

    return (
      <div styleName="wrapper">
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
      </div>
    );
  }
}

export { TitleInput, ITitleInputProps };
