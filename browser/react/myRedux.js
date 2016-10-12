import initialState from './initialState';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';


function albumReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

const reducer = combineReducers({
    albums: albumReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;
