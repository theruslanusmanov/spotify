import {combineReducers} from 'redux'
import {userReducer} from './user'
import {RootState} from './root.state'
import spotifyReducer from './spotify/spotify.reducer'
import {playerReducer} from './player'
import {authorizationReducer} from "./authorization";

const rootReducers = combineReducers<RootState>({
  // @ts-ignore
  user: userReducer,
  spotify: spotifyReducer,
  player: playerReducer,
  authorization: authorizationReducer,
})

export default rootReducers
