import {createReducer} from '@reduxjs/toolkit'
import {playlistsInitialState} from './playlists.state'
import {loadPlaylists, loadPlaylistsError, loadPlaylistsSuccess,} from './playlists.actions'

const playlistsReducer = createReducer(playlistsInitialState, (builder) => {
  builder
    .addCase(loadPlaylists, (state, action) => {
    })
    .addCase(loadPlaylistsSuccess, (state, action) => {
      state.playlists = action.payload
    })
    .addCase(loadPlaylistsError, (state, action) => {
    })
})

export default playlistsReducer
