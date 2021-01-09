import {userInitialState, UserState} from './user/user.state'
import {playlistsInitialState, PlaylistsState} from './playlists/playlists.state'
import {playerInitialState, PlayerState} from './player/player.state'
import {authorizationInitialState, AuthorizationState} from "./authorization/authorization.state";
import {tracksInitialState, TracksState} from "./tracks/tracks.state";

export const initialState: RootState = {
  user: userInitialState,
  playlists: playlistsInitialState,
  player: playerInitialState,
  authorization: authorizationInitialState,
  tracks: tracksInitialState,
}

export interface RootState {
  user: UserState,
  playlists: PlaylistsState,
  player: PlayerState,
  authorization: AuthorizationState
  tracks: TracksState
}
