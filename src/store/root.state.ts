import {userInitialState, UserState} from './user/user.state'
import {spotifyInitialState, SpotifyState} from './spotify/spotify.state'
import {playerInitialState, PlayerState} from "./player/player.state";

export const initialState: RootState = {
    user: userInitialState,
    spotify: spotifyInitialState,
    player: playerInitialState
}

export interface RootState {
    user: UserState
    spotify: SpotifyState
    player: PlayerState
}
