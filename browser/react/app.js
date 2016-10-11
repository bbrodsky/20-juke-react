'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux'; // or const Provider = require('react-redux').Provider;
import store from './myRedux'


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
