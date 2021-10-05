import React, {useEffect} from 'react';
import './Home.css';
import {PersonalizationApi} from '../../api/personalization.api';
import {PlaylistCard} from '../playlist-card/PlaylistCard';

export const Home = () => {
  useEffect(() => {
    PersonalizationApi.getShortcuts()
      .then(response => console.log(response));
  }, [])

  return (
      <div className="home">
        <h2>Good morning</h2>
        <div className="grid-container">
          <PlaylistCard/>
        </div>
      </div>
  )
}
