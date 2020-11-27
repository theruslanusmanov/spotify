import { call, put, takeEvery } from 'redux-saga/effects'
import { PlayerApiService } from '../../services/api/player-api.service'
import {
  loadRecentlyPlayedTracks,
  loadRecentlyPlayedTracksError,
  loadRecentlyPlayedTracksSuccess,
} from './player.actions'

export function * loadRecentlyPlayedTracksWatcher () {
  yield takeEvery(loadRecentlyPlayedTracks.type, loadRecentlyPlayedTracksWorker)
}

const playerApiService = new PlayerApiService()

function * loadRecentlyPlayedTracksWorker (action: any) {
  try {
    const response = yield call(playerApiService.getRecentlyPlayedTracks,
      action.payload)
    const json = yield response.json()
    yield put(loadRecentlyPlayedTracksSuccess(json))
  } catch (error) {
    yield put(loadRecentlyPlayedTracksError(error))
  }
}

export const playerSagas = [loadRecentlyPlayedTracksWatcher]
