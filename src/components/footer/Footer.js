import React from 'react'
import './Footer.css'
import { ReactComponent as Previous } from './previous.svg'
import { ReactComponent as Play } from './play.svg'
import { ReactComponent as Next } from './next.svg'

export const Footer = () => {

  return (
      <footer>
        <div className="player-info">
          <div className="player-info__cover"></div>
          <div className="player-info__name">Song Name</div>
        </div>
        <div className="player-controls">
          <div className="previous-button">
            <Previous/>
          </div>
          <div className="play-button">
            <Play/>
          </div>
          <div className="next-button">
            <Next/>
          </div>
        </div>
        <div className="player-extra-controls"></div>
      </footer>
  );
};
