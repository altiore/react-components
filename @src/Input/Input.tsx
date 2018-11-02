import * as cn from 'classnames';
import * as React from 'react';
import { IconBaseProps } from 'react-icons';
import { WrappedFieldProps } from 'redux-form/lib/Field';

export interface InputProps extends WrappedFieldProps {
  icon?: React.ReactElement<IconBaseProps>;
  inputClass?: string;
  showLabel?: boolean;
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  wrapperClass?: string;
  styles?: {
    main: string;
    inputError: string;
    inputIcon: string;
    inputWarning: string;
    inputWrapper: string;
    label: string;
    input: string;
    error: string;
    warning: string;
  };
}

export const Input = ({
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
  ...rest
}: InputProps & WrappedFieldProps) => {
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
          {...rest}
          {...input}
          placeholder={placeholder || label || input.name}
          type={type}
          className={cn(styles.input, inputClass, {
            [styles.inputError]: touched && !!error,
            [styles.inputWarning]: touched && !!warning,
            [styles.inputIcon]: !!icon
          })}
        />
        {touched &&
          ((error && <span className={styles.error}>{error}</span>) ||
            (warning && <span className={styles.warning}>{warning}</span>))}
      </div>
    </div>
  );
};
