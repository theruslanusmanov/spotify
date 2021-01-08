import {call, put, select, takeEvery} from 'redux-saga/effects'
import {loadTracks, loadTracksError, loadTracksSuccess,} from './tracks.actions'
import {TracksApiService} from "../../services/api/tracks-api.service";
import {getUserToken} from "../user/user.selectors";


export function* loadTracksWatcher() {
  yield takeEvery(loadTracks.type, loadTracksWorker)
}

const tracksApiService = new TracksApiService()

function* loadTracksWorker(action: any) {
  try {
    const token = yield select(getUserToken);
    const response = yield call([tracksApiService, tracksApiService.getTracks],
      token)
    const json = yield response.json()
    yield put(loadTracksSuccess(json))
  } catch (error) {
    yield put(loadTracksError(error))
  }
}

export const tracksSagas = [loadTracksWatcher]
