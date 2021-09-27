import {call, put, select, take, takeEvery} from 'redux-saga/effects'
import {loadTracks, loadTracksError, loadTracksSuccess,} from './tracks.actions'
import {TracksApiService} from "../../services/api/tracks-api.service";
import {getUserToken} from "../user/user.selectors";
import {userActions} from "../user";


export function* loadTracksWatcher() {
  yield takeEvery(loadTracks.type, loadTracksWorker)
}

const tracksApiService = new TracksApiService()

function* loadTracksWorker() {
  try {
    const token = yield select(getUserToken);
    const response = yield call(
      [tracksApiService, tracksApiService.getTracks],
      token)
    const json = yield response.json()
    yield put(loadTracksSuccess(json))
  } catch (error) {
    yield put(loadTracksError(error))
  }
}

export const tracksSagas = [loadTracksWatcher]
