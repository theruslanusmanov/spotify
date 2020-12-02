import {createReducer} from '@reduxjs/toolkit'
import {authorizationInitialState} from './authorization.state'
import {authorize, authorizeError, authorizeSuccess,} from './authorization.actions'

const authorizationReducer = createReducer(
  authorizationInitialState,
  (builder) => {
    builder
      .addCase(authorize, (state, _) => {
      })
      .addCase(authorizeSuccess, (state, _) => {
      })
      .addCase(authorizeError, (state, _) => {
      })
  })

export default authorizationReducer
