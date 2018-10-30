import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ColoredListItem } from '../ColoredListItem';
import { ListBox } from './index';

const listItems = [
  {
    color: '#808080',
    title: 'Afghanistan'
  },
  {
    color: '#FF0000',
    title: 'Bahamas'
  },
  {
    color: '#FFFF00',
    title: 'Cambodia'
  },
  {
    color: '#008000',
    title: 'Denmark'
  },
  {
    color: '#00FFFF',
    title: 'Estonia'
  },
  {
    color: '#808000',
    title: 'Finland'
  },
  {
    color: '#008080',
    title: 'Georgia'
  },
  {
    color: '#0000FF',
    title: 'Hungary'
  },
  {
    color: '#FF00FF',
    title: 'Indonesia'
  },
  {
    color: '#00FF00',
    title: 'Jamaica'
  },
  {
    color: '#800080',
    title: 'Kazakhstan'
  },
  {
    color: '#800000',
    title: 'Lebanon'
  },
  {
    color: '#000080',
    title: 'Madagascar'
  },
  {
    color: '#C0C0C0',
    title: 'Namibia'
  },
  {
    color: '#E9967A',
    title: 'Oman'
  }
];

const block = {
  alignItems: 'flex-start',
  display: 'flex',
  margin: 20
};

storiesOf('Molecules/ListBox', module).add('default', () => (
  <div>
    <div style={{ display: 'flex' }}>
      <div style={block}>
        <ListBox
          addNew={true}
          filter={true}
          items={listItems}
          listItemComponent={ColoredListItem}
          onSelect={action('onSelect')}
          onAddNewClick={action('onAddNewClick')}
        />
      </div>
      <div style={block}>
        <ListBox
          addNew={true}
          filter={true}
          flat={true}
          items={listItems}
          listItemComponent={ColoredListItem}
          onSelect={action('onSelect')}
          onAddNewClick={action('onAddNewClick')}
        />
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={block}>
        <ListBox items={listItems} listItemComponent={ColoredListItem} />
      </div>
      <div style={block}>
        <ListBox flat={true} items={listItems} listItemComponent={ColoredListItem} />
      </div>
    </div>
  </div>
));
