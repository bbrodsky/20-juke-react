'use strict';

import React, { Component } from 'react';

import initialState from '../initialState';
import AUDIO from '../audio';
import newAppContainer from './newAppContainer'
import { connect } from 'react-redux';
import { toggle, toggleOne } from '../myRedux.js'

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

const mod = (num, m) =>((num % m) + m) % m;

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};

const mapStateToProps =  function(state) {
    return {
        isPlaying: state.isPlaying,
        currentSong: state.currentSong,
        currentSongList: state.currentSongList
    };
};

// receives the dispatch() method and returns callback props that you want to inject into the presentational component.
const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggle()),
    toggleOne: (selectedSong, selectedSongList) => dispatch(toggleOne(selectedSong, selectedSongList))
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(newAppContainer);

export default newAppContainer;
