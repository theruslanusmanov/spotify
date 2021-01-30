import {createReducer} from '@reduxjs/toolkit'
import {homeInitialState} from './home.state'
import {loadShortcuts, loadShortcutsError, loadShortcutsSuccess,} from './home.actions'

const homeReducer = createReducer(homeInitialState, (builder) => {
  builder
    .addCase(loadShortcuts, (state, action) => {
    })
    .addCase(loadShortcutsSuccess, (state, action) => {
      state.items = action.payload
    })
    .addCase(loadShortcutsError, (state, action) => {
    })
})

export default homeReducer
