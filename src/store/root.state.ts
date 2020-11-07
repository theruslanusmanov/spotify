import { userInitialState, UserState } from './user/user.state'
import { spotifyInitialState, SpotifyState } from './spotify/spotify.state'

export const initialState: RootState = {
  user: userInitialState,
  spotify: spotifyInitialState
}

export interface RootState {
  user: UserState
  spotify: SpotifyState
}
