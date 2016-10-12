const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';
const MAKE_SONG_PLAY = 'MAKE SONG PLAY';
const MAKE_SONG_STOP = 'MAKE SONG STOP';
const SET_CURRENT_SONG = 'SET CURRENT SONG';
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

const setCurrentSong = function(currentSong, currentSongList){
    return {
        type: SET_CURRENT_SONG,
        currentSong,
        currentSongList
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

export const play = () => {
  return dispatch => {
    AUDIO.play();
    dispatch(playSong());
  }
}

export const pause = () => {
  return dispatch => {
    AUDIO.pause();
    dispatch(stopSong());
  }
}

const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSong(currentSong, currentSongList));
}

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState();
  if (isPlaying) dispatch(pause());
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) =>
  (dispatch, getState) => {
    const { currentSong } = getState();
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};
