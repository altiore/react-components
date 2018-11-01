import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer } from 'redux-form';

export const FormDecorator = getStory => {
  return (
    <Provider store={createStore(combineReducers({ form: reducer }))}>
      {getStory()}
    </Provider>
  );
};
