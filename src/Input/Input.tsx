import * as cn from 'classnames';
import * as React from 'react';
import { IconBaseProps } from 'react-icon-base';
import { WrappedFieldProps } from 'redux-form/lib/Field'

export interface InputProps extends WrappedFieldProps {
  icon?: React.ReactElement<IconBaseProps>,
  inputClass?: string;
  showLabel?: boolean;
  type?: string;
  className?: string;
  placeholder?: string;
  wrapperClass?: string;
  styles?: {
    main: string,
    inputError: string,
    inputWarning: string,
    inputWrapper: string,
    label: string,
    input: string,
    error: string,
    warning: string,
  };
}

export const Input: React.ComponentType<InputProps> = ({
  input,
  label,
  showLabel,
  type = 'text',
  meta: { touched, error, warning },
  styles,
  placeholder,
  inputClass,
  wrapperClass,
  icon,
}: InputProps): React.ReactElement<InputProps>|null => {
  if (!styles) {
    return null;
  }
  return (
    <div className={styles.main}>
      {showLabel && (
        <label htmlFor={input.name} className={styles.label}>
          {label || input.name}
        </label>
      )}
      <div className={cn(styles.inputWrapper, wrapperClass)}>
        {icon && <span styleName="icon">{icon}</span>}
        <input
          {...input}
          placeholder={placeholder || label || input.name}
          type={type}
          className={cn(styles.input, inputClass, {
            [styles.inputError]: touched && !!error,
            [styles.inputWarning]: touched && !!warning,
          })}
        />
        {touched && ((error && <span className={styles.error}>{error}</span>) ||
          (warning && <span className={styles.warning}>{warning}</span>))}
      </div>
    </div>
  );
};
