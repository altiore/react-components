import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Key } from 'ts-keycode-enum';

export interface IListBoxProps extends WrappedFieldProps {
  items: object[];
  filterItem: (filterKw: string, item: any) => boolean;
  compareItem?: (item: any, currentValue: any) => boolean;
  showFilter?: boolean;
  label?: React.ReactNode;
  emptyLabel?: React.ReactNode;
  isMulti?: boolean;
  getItemLabel?: (item: any) => React.ReactNode;
  getItemValue?: (item: any) => any | undefined;
  onClose?: () => void;
}

interface IState {
  displayedItems: any[];
  filterKw: string;
  highlightedItem: any;
}

export class ListBox extends React.Component<IListBoxProps, IState> {
  public static defaultProps: Partial<IListBoxProps> = {
    isMulti: false,
    label: '',
    showFilter: false
  };

  public filterInputRef: React.RefObject<any>;
  public highlightedInputRef: React.RefObject<any>;
  public itemsWrapperRef: React.RefObject<any>;

  public constructor(props: any) {
    super(props);

    this.filterInputRef = React.createRef();
    this.itemsWrapperRef = React.createRef();
    this.highlightedInputRef = React.createRef();

    this.onCloseClick = this.onCloseClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onFilterKeyDown = this.onFilterKeyDown.bind(this);

    this.state = {
      displayedItems: props.items,
      filterKw: '',
      highlightedItem: props.items[0]
    };
  }

  public componentDidMount() {
    this.filterItems('');
    this.filterInputRef.current.focus();
  }

  public onCloseClick(e: React.MouseEvent<HTMLElement>) {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  public onFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(
      {
        filterKw: e.target.value || ''
      },
      () => {
        this.filterItems(this.state.filterKw.trim());
      }
    );
  }

  public selectItem = (item: any) => () => {
    const {
      isMulti,
      input: { value }
    } = this.props;
    let selectedItems = value ? [...value] : [];

    const selectedItemIndex = selectedItems.indexOf(item);
    if (selectedItemIndex === -1) {
      if (isMulti) {
        selectedItems = [...selectedItems, item];
      } else {
        selectedItems = [item];
      }
    } else {
      selectedItems = [...selectedItems.slice(0, selectedItemIndex), ...selectedItems.slice(selectedItemIndex + 1)];
    }

    this.filterInputRef.current.focus();

    this.props.input.onChange(selectedItems);
  };

  public highlightItem = (item: any) => () => {
    this.setState(
      {
        highlightedItem: item
      },
      () => {
        this.scrollToHighlightedItem();
      }
    );
  };

  public scrollToHighlightedItem() {
    const wrapper = this.itemsWrapperRef.current;
    const hlItem = this.highlightedInputRef.current;

    if (hlItem) {
      const hlItemRect = hlItem.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();

      const hlItemTop = hlItemRect.top - wrapperRect.top + wrapper.scrollTop;

      const isHlItemVisible =
        hlItemTop >= wrapper.scrollTop - hlItem.offsetHeight && hlItemTop <= wrapper.scrollTop + wrapper.offsetHeight;

      if (!isHlItemVisible) {
        if (hlItemTop > wrapper.scrollTop + wrapper.offsetHeight - hlItem.offsetHeight) {
          wrapper.scrollTop = hlItemTop;
        } else {
          wrapper.scrollTop = hlItemTop - wrapper.offsetHeight + hlItem.offsetHeight;
          if (wrapper.scrollTop < 0) {
            wrapper.scrollTop = 0;
          }
        }
      }
    }
  }

  public onFilterKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.keyCode) {
      case Key.DownArrow:
        e.preventDefault();
        this.highlightItem(this.getNextItem())();
        break;

      case Key.UpArrow:
        e.preventDefault();
        this.highlightItem(this.getPreviousItem())();
        break;

      case Key.Enter:
        e.preventDefault();
        this.selectItem(this.state.highlightedItem)();
        break;

      case Key.Escape:
        e.preventDefault();
        if (this.state.filterKw === '') {
          if (this.props.onClose) {
            this.props.onClose();
          }
        } else {
          this.setState({
            filterKw: ''
          });
          this.filterItems('');
        }
        break;
    }
  }

  public getNextItem(): any {
    const { displayedItems, highlightedItem } = this.state;
    let highlightedItemIndex: number = (displayedItems || []).indexOf(highlightedItem);
    return displayedItems[++highlightedItemIndex % displayedItems.length];
  }

  public getPreviousItem(): any {
    const { displayedItems, highlightedItem } = this.state;
    const highlightedItemIndex: number = (displayedItems || []).indexOf(highlightedItem);
    return displayedItems[highlightedItemIndex > 0 ? highlightedItemIndex - 1 : displayedItems.length - 1];
  }

  public getItemClass(item: any): string {
    const { highlightedItem } = this.state;
    const {
      compareItem,
      input: { value }
    } = this.props;

    let itemClass: string = 'item';

    if (compareItem ? compareItem(item, value) : (value || []).indexOf(item) !== -1) {
      itemClass += '-selected';
    }

    if (item === highlightedItem) {
      itemClass += '-highlighted';
    }

    return itemClass;
  }

  public filterItems(filterKw: string) {
    const { items, filterItem } = this.props;

    const filteredItems = filterKw ? items.filter(item => filterItem(filterKw, item)) : items;

    this.setState({
      displayedItems: filteredItems,
      highlightedItem: filteredItems[0]
    });
  }

  public render() {
    const { showFilter, label, emptyLabel, getItemLabel } = this.props;
    const { displayedItems, filterKw } = this.state;

    return (
      <div styleName="wrapper">
        <div styleName="header">
          {label}
          <a styleName="close" onClick={this.onCloseClick}>
            ×
          </a>
        </div>

        {showFilter && (
          <div styleName="filterbox">
            <input
              type="text"
              placeholder={'Поиск...'}
              value={filterKw}
              onChange={this.onFilterChange}
              onKeyDown={this.onFilterKeyDown}
              ref={this.filterInputRef}
            />
          </div>
        )}

        <div styleName="list" ref={this.itemsWrapperRef}>
          {displayedItems && displayedItems.length > 0
            ? displayedItems.map((item: any, i: number) => {
                const itemRef = item === this.state.highlightedItem ? this.highlightedInputRef : undefined;

                return (
                  <div
                    key={i}
                    onClick={this.selectItem(item)}
                    onMouseEnter={this.highlightItem(item)}
                    ref={itemRef}
                    styleName={this.getItemClass(item)}
                  >
                    {getItemLabel ? getItemLabel(item) : item.label}
                  </div>
                );
              })
            : emptyLabel || 'Нет элементов'}
        </div>
      </div>
    );
  }
}
