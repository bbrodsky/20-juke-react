const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';
const MAKE_SONG_PLAY = 'MAKE SONG PLAY';
const MAKE_SONG_STOP = 'MAKE SONG STOP';
const LOAD_SONG = 'LOAD SONG';
const INITIALIZE_SONG = 'INITIALIZE SONG';
// const TOGGLE


// Helper functions
const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

const convertAlbums = albums => {
  return albums.map(convertAlbum);
};

const convertLoadedAlbums = jSONalbums => ({
  type: RECEIVE_ALBUMS_FROM_SERVER,
  albums: convertAlbums(jSONalbums)
});

// Action creators
const playSong = function(){
    return {
        type: MAKE_SONG_PLAY
    }
}

const stopSong = function(){
    return {
        type: MAKE_SONG_STOP
    }
}

const loadSong = function(songID, albumSongs){
    return {
        type: LOAD_SONG,
        songID,
        albumSongs
    }
}

// Asynch action creater
export const fetchAlbumsFromServer = () => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(convertLoadedAlbums(albums)))
  }
}
