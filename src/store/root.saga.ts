import {all, fork, take} from 'redux-saga/effects'
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
  // TODO: Get token and only after perform all actions with Spotify APIs
  while (true) {
    yield take(userActions.setToken)
    yield all(sagas.map((saga) => fork(saga)))
  }
}
