import * as React from 'react';
import { FaPlus, FaSearch } from 'react-icons/lib/fa';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import { Button } from '../Button';
import { IProps } from '../Button/Button';
import { ColoredListItem } from '../ColoredListItem';
import { Input } from '../Input';

export interface IListBoxProps {
  addNew?: boolean;
  filter?: boolean;
  flat?: boolean;
  items: object[];
  listItemComponent: React.ComponentClass;
  onSelect?: (item: { color: string; id?: any; title: string }) => void;
  onAddNewClick?: (e: React.MouseEvent<Element & IProps>) => void;
}

interface IState {
  filterKw: string;
}

export class ListBox extends React.Component<IListBoxProps, IState> {
  public static defaultProps: Partial<IListBoxProps> = {
    addNew: false,
    filter: false,
    flat: false
  };

  public constructor(props: any) {
    super(props);

    this.onAddNewClick = this.onAddNewClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);

    this.state = {
      filterKw: ''
    };
  }

  public onAddNewClick(e: React.MouseEvent<Element & IProps>) {
    e.preventDefault();
    if (this.props.onAddNewClick) {
      this.props.onAddNewClick(e);
    }
  }

  public onFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      filterKw: e.target.value || ''
    });
  }

  public render() {
    const { filter, flat, addNew, items, onSelect } = this.props;
    const { filterKw } = this.state;

    return (
      <div styleName={'wrapper' + (flat ? '-flat' : '')}>
        {filter && (
          <Input
            icon={<FaSearch />}
            input={{ name: 'filterKw', onChange: this.onFilterChange } as WrappedFieldInputProps}
            meta={{} as WrappedFieldMetaProps}
            placeholder={'Поиск...'}
          />
        )}

        <div styleName="list">
          {items
            .filter(
              (item: { color: string; title: string }) =>
                item.title.toLowerCase().indexOf(filterKw.toLowerCase()) !== -1
            )
            .map((item: { color: string; title: string }) => <ColoredListItem item={item} onClick={onSelect} />)}
        </div>

        {addNew && (
          <div styleName="add-container">
            <Button onClick={this.onAddNewClick}>
              <span>
                <FaPlus /> Создать
              </span>
            </Button>
          </div>
        )}
      </div>
    );
  }
}
