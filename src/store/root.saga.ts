import {all, fork, take, takeEvery} from 'redux-saga/effects'
import {playlistsSagas} from './playlists/playlists.saga'
import {playerSagas} from './player/player.saga'
import {tracksSagas} from "./tracks/tracks.saga";
import {userActions} from "./user";

export const sagas = [
  ...playlistsSagas,
  ...playerSagas,
  ...tracksSagas,
]

export default function* rootSaga() {
  while (true) {
    yield take(userActions.setToken)
    yield all(sagas.map((saga) => fork(saga)))
  }
}
