import React from 'react';
import Sidebar from '../components/Sidebar';
// import Album from '../components/Album';
import Player from '../components/Player';
import AlbumsContainer from './AlbumsContainer'
import AUDIO from '../audio';


export default class newAppContainer extends React.Component {
  componentDidMount () {
    AUDIO.addEventListener('ended', () =>
      this.next());
    AUDIO.addEventListener('timeupdate', () =>
      this.setProgress(AUDIO.currentTime / AUDIO.duration));
  }
  next () {
    this.startSong(...skip(1, this.state));
  }

  prev () {
    this.startSong(...skip(-1, this.state));
  }

  seek (decimal) {
    AUDIO.currentTime = AUDIO.duration * decimal;
    this.setProgress(AUDIO.currentTime / AUDIO.duration);
  }

  setProgress (progress) {
    this.setState({ progress });
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
        <AlbumsContainer />
        {/* <Album
          // album={this.state.album}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggle={this.props.toggleOne}
        /> */}
        </div>
        {/* <Player
          currentSong={this.props.currentSong}
          currentSongList={this.props.currentSongList}
          isPlaying={this.props.isPlaying}
          // progress={this.state.progress}
          next={this.next}
          prev={this.prev}
          toggle={this.props.toggle}
          scrub={evt => this.seek(evt.nativeEvent.offsetX / evt.target.clientWidth)}
        /> */}

      </div>
    );
  }
}
