import React, {useEffect, useState} from 'react';
import './Home.css';
import {PersonalizationApi} from '../../api/personalization.api';
import {PlaylistCard} from '../playlist-card/PlaylistCard';

export const Home = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    PersonalizationApi.getShortcuts().then(response => {
      setResponse(response);
    });
  }, []);

  return (
      <div className="home">
        <h2>Good morning</h2>
        <div className="grid-container">
          {
            response?.tracks?.map(function(data, i) {
              return <PlaylistCard album={data.album} key={i}/>;
            })
          }
        </div>
      </div>
  );
};
