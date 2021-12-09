import React, {useEffect, useState} from 'react'
import './Search.css'
import {GenresApi} from '../../api/genres.api'

export const Search = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    GenresApi.getRecommendationGenres().then(response => {
      setGenres(response.genres)
    })
  }, [])

  function prettifyGenre(name) {
    return name.split('-').map(v => {
      return v.charAt(0).toUpperCase() + v.slice(1);
    }).join(' ');
  }

  return (
    <div className="search">
      <h1>All genres</h1>
      <div className="grid-container">
        {
          genres.map((genre, key) => {
            return (
              <div
                className="genre-card"
                key={key}
                style={{'backgroundColor': `#${Math.floor(Math.random() * 16777215).toString(16)}`}}>
                <h3>{prettifyGenre(genre)}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
