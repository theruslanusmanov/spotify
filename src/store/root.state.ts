import {userInitialState, UserState} from './user/user.state'
import {playlistsInitialState, PlaylistsState} from './playlists/playlists.state'
import {playerInitialState, PlayerState} from './player/player.state'
import {authorizationInitialState, AuthorizationState} from "./authorization/authorization.state";
import {tracksInitialState, TracksState} from "./tracks/tracks.state";
import {searchInitialState, SearchState} from "./search/search.state";
import {homeInitialState, HomeState} from "./home/home.state";

export const initialState: RootState = {
  user: userInitialState,
  playlists: playlistsInitialState,
  player: playerInitialState,
  authorization: authorizationInitialState,
  tracks: tracksInitialState,
  search: searchInitialState,
  home: homeInitialState,
}

export interface RootState {
  user: UserState
  playlists: PlaylistsState
  player: PlayerState
  authorization: AuthorizationState
  tracks: TracksState
  search: SearchState
  home: HomeState
}
