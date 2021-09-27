import {createReducer} from '@reduxjs/toolkit'
import {searchInitialState} from './search.state'
import {search, searchError, searchSuccess,} from './search.actions'

const searchReducer = createReducer(searchInitialState, (builder) => {
  builder
    .addCase(search, (state, action) => {
    })
    .addCase(searchSuccess, (state, action) => {
      state.result = action.payload
    })
    .addCase(searchError, (state, action) => {
    })
})

export default searchReducer
