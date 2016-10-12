import initialState from './initialState';
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
const logger = createLogger();


const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';


function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default store;
