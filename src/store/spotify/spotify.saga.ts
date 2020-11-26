import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchSongs,
  fetchSongsError,
  fetchSongsSuccess,
  loadPlaylists,
  loadPlaylistsError,
  loadPlaylistsSuccess,
} from './spotify.actions'
import { SpotifyApiService } from '../../services/spotify-api.service'

export function * fetchSongsWatcher () {
  yield takeEvery(fetchSongs.type, loadSongsSagaWorker)
}

export function * loadPlaylistsWatcher () {
  yield takeEvery(loadPlaylists.type, loadPlaylistsWorker)
}

const spotifyApiService = new SpotifyApiService()

function * loadSongsSagaWorker (action: any) {
  try {
    const response = yield call(spotifyApiService.getTracks, action.payload)
    const json = yield response.json()
    yield put(fetchSongsSuccess(json))
  } catch (error) {
    yield put(fetchSongsError(error))
  }
}

function * loadPlaylistsWorker (action: any) {
  try {
    const response = yield call(spotifyApiService.getPlaylists, action.payload)
    const json = yield response.json()
    yield put(loadPlaylistsSuccess(json))
  } catch (error) {
    yield put(loadPlaylistsError(error))
  }
}

export const spotifySagas = [fetchSongsWatcher, loadPlaylistsWatcher]
