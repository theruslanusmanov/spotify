import { createReducer } from '@reduxjs/toolkit'
import { playerInitialState } from './player.state'
import { pause, play } from './player.actions'

const playerReducer = createReducer(playerInitialState, (builder) => {
  builder.addCase(play, (state, _) => {
    state.isPlaying = true
  }).addCase(pause, (state, _) => {
    state.isPlaying = false
  })
})

export default playerReducer
