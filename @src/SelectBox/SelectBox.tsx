import * as React from 'react';
import Select from 'react-select';
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import { Button } from '../Button';
import { Dropdown, DropdownIndicator, Option } from './index';

interface ISelectBoxProps extends WrappedFieldProps {
  icon?: JSX.Element;
  isHeader?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (value: object | string | string[]) => void;
  options: Array<{ label: JSX.Element; value: string }>;
  placeholder?: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  label?: string;
}

interface ISelectBoxState {
  isOpen: boolean;
}

export class SelectBox extends React.PureComponent<ISelectBoxProps, ISelectBoxState> {
  public static defaultProps: Partial<ISelectBoxProps> = {
    isHeader: true,
    isMulti: false,
    isSearchable: true,
    placeholder: ''
  };

  public constructor(props: any) {
    super(props);

    this.onSelectChange = this.onSelectChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);

    this.state = {
      isOpen: false
    };
  }

  public toggleOpen() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  public onSelectChange(value: { label: JSX.Element; value: string }) {
    let newValue: any = [];
    if (!this.props.isMulti) {
      newValue = value ? [value[1] || value[0]] : [];
      this.toggleOpen();
    } else {
      newValue = value;
    }

    this.props.input.onChange(newValue);
  }

  public render() {
    const { icon, input, isHeader, isMulti, isSearchable, label, options, placeholder } = this.props;
    const { isOpen } = this.state;

    let selectedValuesLabel = null;
    if (input.value && input.value.length > 0) {
      if (isMulti) {
        selectedValuesLabel = ' (' + input.value.length + ')';
      } else {
        selectedValuesLabel = input.value[0] && <span>: {input.value[0].label}</span>;
      }
    }

    return (
      <div styleName="wrapper">
        <Dropdown
          isOpen={isOpen}
          onClose={this.toggleOpen}
          target={
            <Button onClick={this.toggleOpen} styleName="trigger" type="button">
              <span styleName="label">
                {icon} {label}
                {selectedValuesLabel}
              </span>
            </Button>
          }
        >
          <div styleName={'inner' + (isSearchable ? '' : '-not-searchable')}>
            {isHeader && (
              <div styleName="header">
                {label}
                <a styleName="close" onClick={this.toggleOpen}>
                  ×
                </a>
              </div>
            )}
            <div styleName="select-container">
              <Select
                autoFocus
                backspaceRemovesValue={false}
                components={{ DropdownIndicator, IndicatorSeparator: null, Option }}
                controlShouldRenderValue={false}
                hideSelectedOptions={false}
                isClearable={false}
                isMulti={true}
                isSearchable={isSearchable}
                menuIsOpen
                onChange={this.onSelectChange}
                options={options}
                placeholder={placeholder}
                styles={customStyles}
                tabSelectsValue={false}
                value={input.value}
              />
            </div>
          </div>
        </Dropdown>
      </div>
    );
  }
}

const customStyles = {
  control: (provided: object) => ({
    ...provided,
    color: '#6b808c',
    fontSize: '14px'
  }),
  placeholder: (provided: object) => ({
    ...provided,
    color: '#6b808c',
    fontSize: '14px'
  })
};
