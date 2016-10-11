import { connect } from 'react-redux';
import


const mapStateToProps =  function(state, ownProps) {
    return {
        album: state.albums
    };
};

// receives the dispatch() method and returns callback props that you want to inject into the presentational component.
const mapDispatchtoProps = function(dispatch, ownProps) {
    return {
        loadAlbums (albums) {
          dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums }); // hm, could we shorten this, too?
        }
    }
}

function connect (mapStateToProps, mapDispatchToProps) => fnThatTakesAComponent => newComponent
