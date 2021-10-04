import React, {useEffect} from 'react';
import './Home.css';
import {PersonalizationApi} from '../../api/personalization.api';

export const Home = () => {
  useEffect(() => {
    PersonalizationApi.getShortcuts()
      .then(response => console.log(response));
  }, [])

  return (
      <div className="home">
        <h2>Good morning</h2>
        <div className="grid-container">
          <div className="playlist-card"></div>
          <div className="playlist-card"></div>
          <div className="playlist-card"></div>
          <div className="playlist-card"></div>
          <div className="playlist-card"></div>
          <div className="playlist-card"></div>
        </div>
      </div>
  )
}
