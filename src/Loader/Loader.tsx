import * as React from 'react';

import './styles.scss';

export interface IProps {
  size?: number,
  color?: string,
}

export const Loader = ({ size = 200, color = '#e44f24' }: IProps) => {
  const transform = 0.625 * size;
  const wrapSize = size * 1.25;
  const position = size / 8;
  const trans1 = size / 2;
  const trans2 = 0.51875 * size;
  const shadow = 0.0375 * size;
  return (
    <div className='lds-css ng-scope'>
      <div
        style={{
          height: `${wrapSize}px`,
          transform: `translate(${transform}, -${transform}) scale(1) translate(${transform}, ${transform})`,
          width: `${wrapSize}px`,
        }} className='lds-eclipse'
      >
        <div
          style={{
            boxShadow: `0 ${shadow}px 0 0 ${color}`,
            height: size,
            left: `${position}px`,
            top: `${position}px`,
            transformOrigin: `${trans1}px ${trans2}px`,
            width: size,
          }}
        />
      </div>
    </div>
  );
};
