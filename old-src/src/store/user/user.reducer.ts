import {createReducer} from "@reduxjs/toolkit";
import {userInitialState} from "./user.state";
import {setToken} from "./user.actions";


const userReducer = createReducer(userInitialState, (builder) => {
  builder
    .addCase(setToken, (state, action) => {
      state.token = action.payload
    })
})

export default userReducer
