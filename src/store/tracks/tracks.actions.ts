import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'tracks'

const loadTracks = createAction(`${PREFIX}/loadTracks`)
const loadTracksSuccess = createAction<any[]>(`${PREFIX}/loadTracksSuccess`)
const loadTracksError = createAction<any>(`${PREFIX}/loadTracksError`)

export {
  loadTracks,
  loadTracksSuccess,
  loadTracksError,
}
