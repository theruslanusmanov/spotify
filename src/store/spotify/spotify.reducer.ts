import { createReducer } from '@reduxjs/toolkit'
import { spotifyInitialState } from './spotify.state'
import {
  fetchSongs,
  fetchSongsError,
  fetchSongsSuccess,
  loadPlaylists,
  loadPlaylistsError,
  loadPlaylistsSuccess,
  playSong,
} from './spotify.actions'

const spotifyReducer = createReducer(spotifyInitialState, (builder) => {
  builder.addCase(playSong, (state, action) => {
  }).addCase(fetchSongs, (state, action) => {
  }).addCase(fetchSongsSuccess, (state, action) => {
    state.tracks = action.payload
  }).addCase(fetchSongsError, (state, action) => {
  }).addCase(loadPlaylists, (state, action) => {
  }).addCase(loadPlaylistsSuccess, (state, action) => {
    state.playlists = action.payload
  }).addCase(loadPlaylistsError, (state, action) => {
  })
})

export default spotifyReducer
