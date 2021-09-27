import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'spotify'

const loadPlaylists = createAction(`${PREFIX}/loadPlaylists`)
const loadPlaylistsSuccess = createAction<any>(`${PREFIX}/loadPlaylistsSuccess`)
const loadPlaylistsError = createAction<any>(`${PREFIX}/loadPlaylistsError`)

export {
  loadPlaylists,
  loadPlaylistsSuccess,
  loadPlaylistsError
}
