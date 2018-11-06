import * as React from 'react';
import { MdCheck } from 'react-icons/md';
import { components } from 'react-select';

const Dropdown = ({ children, isOpen, target, onClose }: any) => (
  <div styleName="dropdown">
    {target}
    {isOpen ? <div styleName="menu">{children}</div> : null}
    {isOpen ? <div styleName="blanket" onClick={onClose} /> : null}
  </div>
);

const Option = (props: any) => {
  return (
    <div styleName={'option' + (props.isSelected ? '-selected' : '')}>
      <components.Option {...props} />
      <div styleName="check">
        <MdCheck />
      </div>
    </div>
  );
};

const DropdownIndicator = () => (
  <svg style={{ height: 24, width: 32 }}>
    <path
      d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export { Dropdown, DropdownIndicator, Option };
