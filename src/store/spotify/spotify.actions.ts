import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'spotify'

/**
 * Load Songs
 */
const fetchSongs = createAction<string>(`${PREFIX}/fetchSongs`)
const fetchSongsPending = createAction<any>(`${PREFIX}/fetchSongsPending`)
const fetchSongsSuccess = createAction<any>(`${PREFIX}/fetchSongsSuccess`)
const fetchSongsError = createAction<any>(`${PREFIX}/fetchSongsError`)

/**
 * Search
 */
const searchSongs = createAction<any>(`${PREFIX}/searchSongs`)
const searchSongsPending = createAction<any>(`${PREFIX}/searchSongsPending`)
const searchSongsSuccess = createAction<any>(`${PREFIX}/searchSongsSuccess`)
const searchSongsError = createAction<any>(`${PREFIX}/searchSongsError`)

/**
 * Song
 */
const playSong = createAction<any>(`${PREFIX}/playSong`)
const stopSong = createAction<any>(`${PREFIX}/stopSong`)
const pauseSong = createAction<any>(`${PREFIX}/pauseSong`)
const resumeSong = createAction<any>(`${PREFIX}/resumeSong`)

/**
 * Playlists
 */
const loadPlaylists = createAction<any>(`${PREFIX}/loadPlaylists`)
const loadPlaylistsSuccess = createAction<any>(`${PREFIX}/loadPlaylistsSuccess`)
const loadPlaylistsError = createAction<any>(`${PREFIX}/loadPlaylistsError`)

export {
  fetchSongs,
  fetchSongsPending,
  fetchSongsSuccess,
  fetchSongsError,
  searchSongs,
  searchSongsPending,
  searchSongsSuccess,
  searchSongsError,
  playSong,
  stopSong,
  pauseSong,
  resumeSong,
  loadPlaylists,
  loadPlaylistsSuccess,
  loadPlaylistsError
}
