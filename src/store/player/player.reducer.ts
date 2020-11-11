import {playerInitialState} from './player.state'
import {createReducer} from '@reduxjs/toolkit'
import {pause, play} from './player.actions'

const playerReducer = createReducer(playerInitialState, (builder) => {
    builder
        .addCase(play, (state, action) => {
            state.isPlaying = true
        })
        .addCase(pause, (state, action) => {
            state.isPlaying = false;
        })
})

export default playerReducer
