import { spotifyInitialState } from './spotify.state'
import { createReducer } from '@reduxjs/toolkit'
import { playSong } from './spotify.actions'

const spotifyReducer = createReducer(spotifyInitialState, (builder) => {
  builder.addCase(playSong, (state, action) => {})
})

export default spotifyReducer
