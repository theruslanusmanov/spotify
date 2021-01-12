import {call, put, select, take, takeEvery} from 'redux-saga/effects'
import {loadPlaylists, loadPlaylistsError, loadPlaylistsSuccess,} from './playlists.actions'
import {PlaylistsApiService} from '../../services/api/playlists-api.service'
import {getUserToken} from "../user/user.selectors";
import {userActions} from "../user";

export function* loadPlaylistsWatcher() {
  yield takeEvery(loadPlaylists.type, loadPlaylistsWorker)
}

const playlistsApiService = new PlaylistsApiService()

function* loadPlaylistsWorker() {
  try {
    const token = yield select(getUserToken);
    const response = yield call(
      [playlistsApiService, playlistsApiService.getPlaylists],
      token)
    const json = yield response.json()
    yield put(loadPlaylistsSuccess(json))
  } catch (error) {
    yield put(loadPlaylistsError(error))
  }
}

export const playlistsSagas = [loadPlaylistsWatcher]
