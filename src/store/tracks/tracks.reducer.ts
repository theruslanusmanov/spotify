import {createReducer} from '@reduxjs/toolkit'
import {tracksInitialState} from './tracks.state'
import {loadTracks, loadTracksSuccess,} from './tracks.actions'

const tracksReducer = createReducer(tracksInitialState, (builder) => {
  builder
    .addCase(loadTracks, (state, _) => {
    })
    .addCase(loadTracksSuccess, (state, action) => {
      state.items = action.payload
    })
})

export default tracksReducer
