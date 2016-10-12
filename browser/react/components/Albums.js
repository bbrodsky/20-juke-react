import React from 'react';
import store from '../myRedux';


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
  albums.map(e => {
    e = convertAlbum(e);
    e.imageUrl = `/api/albums/${e.id}/image`;
    return e;
  })

  return albums;
}

class Albums extends React.Component {
  componentDidMount(){
    fetch('/api/albums/')
      .then(res => res.json())
      .then(albums => console.log(store.dispatch({type: "RECEIVE_ALBUMS_FROM_SERVER", action: convertAlbums(albums)})));
    }

  render(){
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          <div className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
              <div className="caption">
                <h5>
                  <span>ALBUM ONE NAME HERE</span>
                </h5>
                <small>NUMBER OF SONGS HERE songs</small>
              </div>
            </a>
          </div>
          <div className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
              <div className="caption">
                <h5>
                  <span>ALBUM TWO NAME HERE</span>
                </h5>
                <small>NUMBER OF SONGS HERE songs</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Albums;
