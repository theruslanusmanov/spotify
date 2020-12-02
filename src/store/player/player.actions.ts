import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'player'

const play = createAction(`${PREFIX}/play`)
const pause = createAction(`${PREFIX}/pause`)

// Get recently played tracks
const loadRecentlyPlayedTracks = createAction<string>(`${PREFIX}/loadRecentlyPlayedTracks`)
const loadRecentlyPlayedTracksSuccess = createAction<any>(`${PREFIX}/loadRecentlyPlayedTracksSuccess`)
const loadRecentlyPlayedTracksError = createAction<any>(`${PREFIX}/loadRecentlyPlayedTracksError`)

export {
  play,
  pause,
  loadRecentlyPlayedTracks,
  loadRecentlyPlayedTracksSuccess,
  loadRecentlyPlayedTracksError
}
