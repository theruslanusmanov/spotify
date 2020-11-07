import { combineReducers } from 'redux'
import { userReducer } from './user'
import { RootState } from './root.state'
import spotifyReducer from './spotify/spotify.reducer'

const rootReducers = combineReducers<RootState>({
  // @ts-ignore
  user: userReducer,
  spotify: spotifyReducer
})

export default rootReducers
