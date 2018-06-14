import * as cn from 'classnames';
import * as React from 'react';

// import Ink from '../Ink'
// import Loading from '../Icons/Loading';

export interface IProps {
  children: string | JSX.Element;
  className?: string;
  danger?: boolean;
  disabled?: boolean;
  float?: boolean;
  isLoading?: boolean;
  little?: boolean;
  lg?: boolean;
  onClick?: (e: React.MouseEvent) => void,
  primary?: boolean;
  secondary?: boolean;
  sm?: boolean;
  stretch?: boolean;
  styles?: {
    button: string,
    danger: string,
    float: string,
    little: string,
    lg: string,
    primary: string,
    secondary: string,
    sm: string,
    stretch: string,
    text: string,
    xs: string,
  };
  xs?: boolean;
}

export class Button extends React.PureComponent<IProps> {
  public render() {
    const {
      children,
      className,
      danger,
      sm,
      lg,
      onClick,
      primary,
      float,
      isLoading,
      disabled,
      secondary,
      stretch,
      styles,
      xs,
    } = this.props;
    if (!styles) {
      return null;
    }
    return (
      <button
        onClick={onClick}
        disabled={disabled || isLoading}
        className={cn(styles.button, className, {
          [styles.xs]: xs,
          [styles.sm]: sm,
          [styles.lg]: lg,
          [styles.danger]: danger,
          [styles.primary]: primary,
          [styles.secondary]: secondary,
          [styles.float]: float,
          [styles.stretch]: stretch,
        })}
      >
        {isLoading ? (
          <span>loading...</span>
          /* <Loading color={this.getColor()} /> */
        ) : (
          <React.Fragment>
            {/*{!disabled && <Ink />}*/}
            <span className={styles.text}>{children}</span>
          </React.Fragment>
        )}
      </button>
    );
  };
};
