import React from 'react';
import './Library.css';

export const Library = () => {

  return (
      <div className="search">
        <h1>Library</h1>
        <div className="grid-container">
          <div className="playlist-card">
            <div className="playlist-card__cover"></div>
            <h3>Rock</h3>
            <h4>Rock legends & epic songs spanning decades, that continue to inspire generations.</h4>
          </div>
        </div>
      </div>
  );
};
