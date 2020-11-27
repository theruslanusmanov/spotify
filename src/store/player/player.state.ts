export const playerInitialState: PlayerState = {
  isPlaying: false,
  audio: null,
  recentlyPlayedTracks: null,
}

export interface PlayerState {
  isPlaying: boolean,
  audio: any
  recentlyPlayedTracks: any
}
