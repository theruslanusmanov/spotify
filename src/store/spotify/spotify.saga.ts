import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchSongs,
  fetchSongsError,
  fetchSongsSuccess,
} from './spotify.actions'
import { SpotifyApiService } from '../../services/spotify-api.service'

export function * spotifySagaWatcher () {
  const action = yield takeEvery(fetchSongs.type, loadSongsSagaWorker)
}

function * loadSongsSagaWorker (action: any) {
  try {
    const response = yield call(fetchSongs, action.payload)
    yield put(fetchSongsSuccess(response))
  } catch (error) {
    yield put(fetchSongsError(error))
  }
}

async function fetchSongsAPI (action: any) {
  return await fetch(`https://api.spotify.com/v1/me/tracks?limit=50`,
    { method: 'GET' }).then((res: Response) => res.json())
}

export const spotifySagas = [spotifySagaWatcher]
