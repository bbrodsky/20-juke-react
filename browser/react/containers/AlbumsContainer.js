import { connect } from 'react-redux';
import Albums from '../components/Albums'
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';
import { convertLoadedAlbums } from '../actions';


const mapStateToProps =  function(state, ownProps) {
    return {
        albums: state.albums
    };
};

// receives the dispatch() method and returns callback props that you want to inject into the presentational component.
const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        loadAlbums (albums) {
          dispatch(convertLoadedAlbums(albums));
        }
    }
}

const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;
//
//
// function connect(mS2P, mD2P) {
//
//   let store = this.context.store;
//   return function (InnerComponent) {
//     return class extends React.Component {
//
//       render () {
//         let state = mS2P(store.getState())
//         let behavior = mS2P(store.dispatch)
//         <InnerComponent
//          />
//       }
//     }
//   }
// }
