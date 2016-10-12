const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';

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

export const convertLoadedAlbums = jSONalbums => ({
  type: RECEIVE_ALBUMS_FROM_SERVER,
  albums: convertAlbums(jSONalbums)
});
