import { connect } from 'react-redux';
import Albums from '../components/Albums'


const mapStateToProps =  function(state, ownProps) {
    return {
        album: state.albums
    };
};

// receives the dispatch() method and returns callback props that you want to inject into the presentational component.
const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        loadAlbums (albums) {
          dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums }); // hm, could we shorten this, too?
        }
    }
}

const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;
