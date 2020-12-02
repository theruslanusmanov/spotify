import {createReducer} from '@reduxjs/toolkit'
import {playerInitialState} from './player.state'
import {
  loadRecentlyPlayedTracks,
  loadRecentlyPlayedTracksError,
  loadRecentlyPlayedTracksSuccess,
  pause,
  play,
} from './player.actions'

const playerReducer = createReducer(playerInitialState, (builder) => {
  builder
    .addCase(play, (state, _) => {
      state.isPlaying = true
    })
    .addCase(pause, (state, _) => {
      state.isPlaying = false
    })
    .addCase(loadRecentlyPlayedTracks, (state, _) => {
    })
    .addCase(loadRecentlyPlayedTracksSuccess, (state, action) => {
      state.recentlyPlayedTracks = action.payload
    })
    .addCase(loadRecentlyPlayedTracksError, (state, _) => {
    })
})

export default playerReducer
