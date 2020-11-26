import { createReducer } from '@reduxjs/toolkit'
import { spotifyInitialState } from './spotify.state'
import {
  fetchSongs,
  fetchSongsError,
  fetchSongsSuccess,
  playSong,
} from './spotify.actions'

const spotifyReducer = createReducer(spotifyInitialState, (builder) => {
  builder.addCase(playSong, (state, action) => {
  }).addCase(fetchSongs, (state, action) => {
  }).addCase(fetchSongsSuccess, (state, action) => {
    state.tracks = action.payload
  }).addCase(fetchSongsError, (state, action) => {
  })
})

export default spotifyReducer
