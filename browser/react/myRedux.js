import initialState from './initialState';
import { createStore } from 'redux'


const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';


// function fetchAlbums = () => dispatch => {
//     Promise.
//       .resolve(newsFeed)
//       .then(newsFeed => {
//         dispatch(receiveNewsStories(newsFeed));
//       });
// }

// function RECEIVE_ALBUMS_FROM_SERVER() {
//   return {
//     albumsReceived: albumsReceived
//   }
// }


function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

const store = createStore(reducer);

console.log(store.getState()); // { albums: [] }
store.dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: ['The White Album', 'Let It Be', 'Abbey Road'] });
console.log(store.getState()); // { albums: [ /* some albums */ ] }
