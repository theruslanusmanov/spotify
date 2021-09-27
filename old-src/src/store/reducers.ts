import {combineReducers} from 'redux'
import {userReducer} from './user'
import {RootState} from './root.state'
import playlistsReducer from './playlists/playlists.reducer'
import {playerReducer} from './player'
import {authorizationReducer} from "./authorization";
import {tracksReducer} from "./tracks";
import {searchReducer} from "./search";
import {homeReducer} from "./home";

const rootReducers = combineReducers<RootState>({
  // @ts-ignore
  user: userReducer,
  playlists: playlistsReducer,
  player: playerReducer,
  authorization: authorizationReducer,
  tracks: tracksReducer,
  search: searchReducer,
  home: homeReducer,
})

export default rootReducers
