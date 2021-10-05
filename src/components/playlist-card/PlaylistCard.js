import React, {useEffect, useState} from 'react';
import './PlaylistCard.css';

export const PlaylistCard = (props) => {
  const [coverUrl, setCoverUrl] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setCoverUrl(props.album.images[2].url);
    setTitle(props.album.name);
  }, [props.album]);

  return (
      <div className="playlist-card">
        <div className="playlist-card__cover" style={{
          backgroundImage: `url(${coverUrl})`,
        }}/>
        <div className="playlist-card__title">{title}</div>
      </div>
  );
};
