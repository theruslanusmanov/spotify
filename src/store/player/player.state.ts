export const playerInitialState: PlayerState = {
  isPlaying: false,
  audio: null,
}

export interface PlayerState {
  isPlaying: boolean,
  audio: any
}
