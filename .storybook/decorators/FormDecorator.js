import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from 'redux-form';

export const FormDecorator = getStory => {
  return (
    <Provider store={createStore(reducer)}>
      {getStory()}
    </Provider>
  );
};
