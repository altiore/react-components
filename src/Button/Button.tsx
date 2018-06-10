import * as cn from 'classnames';
import * as React from 'react';

// import Ink from '../Ink'
// import Loading from '../Icons/Loading';

// const baseClass = 'base-button-ratiov';

export interface IProps {
  children: string | JSX.Element;
  className?: string;
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
      sm,
      lg,
      onClick,
      primary,
      float,
      isLoading,
      disabled,
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
          [styles.primary]: primary,
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
