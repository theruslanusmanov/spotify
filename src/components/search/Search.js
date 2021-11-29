import React, { useEffect, useState } from 'react'
import './Search.css'
import { GenresApi } from '../../api/genres.api'

export const Search = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    GenresApi.getRecommendationGenres().then(response => {
      setGenres(response.genres)
    })
  }, [])

  return (
    <div className="search">
      <h1>All genres</h1>
      <div className="grid-container">
        <div className="genre-card">
          <h3>Rock</h3>
        </div>
        <div className="genre-card">
          <h3>Rock</h3>
        </div>
        <div className="genre-card">
          <h3>Rock</h3>
        </div>
        <div className="genre-card">
          <h3>Rock</h3>
        </div>
        {
          genres.map((genre, key) => {
            return (
              <div className="genre-card" key={key}>
                <h3>{genre}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
