import initialState from './initialState';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';
const MAKE_SONG_PLAY = 'MAKE SONG PLAY';
const MAKE_SONG_STOP = 'MAKE SONG STOP';
const SET_CURRENT_SONG = 'SET CURRENT SONG';

function albumReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return action.albums;
    default: return state;
  }
}

function isPlayingReducer (state = false, action) {
  switch (action.type) {
    case MAKE_SONG_PLAY: return true;
    case MAKE_SONG_STOP: return false;
    default: return state;
  }
}

const currentSongReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG: return action.currentSong;
    default: return state;
  }
};

const currentSongListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_SONG: return action.currentSongList;
    default: return state;
  }
};


const reducer = combineReducers({
    albums: albumReducer,
    isPlaying: isPlayingReducer,
    currentSong: currentSongReducer,
    currentSongList: currentSongListReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;
