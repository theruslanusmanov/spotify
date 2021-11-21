import React, { useEffect, useState } from 'react'
import './Library.css';
import { PlaylistsApi } from '../../api/playlists.api'

export const Library = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    PlaylistsApi.getCurrentUserPlaylist(10, 0).then(response => {
      console.log(response);
      setPlaylists(response.items);
    });
  }, [])

  return (
      <div className="search">
        <h1>Library</h1>
        <div className="grid-container">
          <div className="playlist-card">
            <div className="playlist-card__cover"></div>
            <h3>Rock</h3>
            <h4>Rock legends & epic songs spanning decades, that continue to inspire generations.</h4>
          </div>
          {
            playlists.map((playlist, key) => {
              return <div className="playlist-card" key={key}>
                <div className="playlist-card__cover"></div>
                <h3>{playlist.name}</h3>
                <h4>{playlist.description}</h4>
              </div>
            })
          }
        </div>
      </div>
  );
};
