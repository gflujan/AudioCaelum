import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isSongPlaying: false, };
    this.togglePlayPause = this.togglePlayPause.bind(this);
  };

  // componentDidUpdate() {
  //   if (!this.state.isSongPlaying && this.props.loadedSong) {
  //     const player = document.getElementById('player');
  //     player.play();
  //   }
  // };

  togglePlayPause(e) {
    const x = e.which;
    console.log('CURRENT KEY PRESS: ', x);
    const player = document.getElementById('player');
    if (this.props.loadedSong) {
      if (x === 32 && this.state.isSongPlaying) {
        player.pause();
        e.stopPropagation();
      } else {
        player.play();
        e.stopPropagation();
      }
      this.setState({ isSongPlaying: !this.state.isSongPlaying, });
    }
  };

  render() {
    const song = this.props.loadedSong ? this.props.loadedSong : '';
    document.addEventListener("keydown", this.togglePlayPause);

    return (
      <div className="audio-player-wrapper">
        <div className="player-container">
          <audio id="player" className="audio-player" src={song.songUrl} controls>
            Your browser does not support the HTML5 audio player
          </audio>
          <div className="playing-artist">
            <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d6e882ee85e18d60f492166e1f5400b4af1310d3/album_wow_1.jpg" />
            <div className="artist-info">
              <div>AnneX</div>
              <div>Bound by Goat's Blood</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Player;
