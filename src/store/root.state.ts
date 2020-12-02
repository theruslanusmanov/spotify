import {userInitialState, UserState} from './user/user.state'
import {spotifyInitialState, SpotifyState} from './spotify/spotify.state'
import {playerInitialState, PlayerState} from './player/player.state'
import {authorizationInitialState, AuthorizationState} from "./authorization/authorization.state";

export const initialState: RootState = {
  user: userInitialState,
  spotify: spotifyInitialState,
  player: playerInitialState,
  authorization: authorizationInitialState,
}

export interface RootState {
  user: UserState,
  spotify: SpotifyState,
  player: PlayerState,
  authorization: AuthorizationState
}
