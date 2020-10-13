import React from 'react'
import './NowPlayingBar.scss'

export const NowPlayingBar: React.FC = () => {
  return (
    <div className="now-playing-bar">
      <div className="now-playing-bar__left">
        <div className="now-playing__cover-art"></div>
        <div className="now-playing__song">
          <div className="now-playing__song__name">Soneg name</div>
          <div className="now-playing__song__author">Song Author</div>
        </div>
      </div>
      <div className="now-playing-bar__center">
        <div className="now-playing__controls">
          <div className="now-playing__controls__top">""</div>
          <div className="playback-bar">
            <div className="playback-bar__progress-time">0:00</div>
            <div className="progress-bar"></div>
            <div className="playback-bar__progress-time">2:34</div>
          </div>
        </div>
      </div>
      <div className="now-playing-bar__right">
        <div className="progress-bar"></div>
      </div>
    </div>
  )
}
