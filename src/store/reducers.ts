import { combineReducers } from 'redux'
import { userReducer } from './user'
import { RootState } from './rootState'

const rootReducers = combineReducers<RootState>({
  // @ts-ignore
  user: userReducer,
})

export default rootReducers
