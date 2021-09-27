import {all, fork} from 'redux-saga/effects'
import {playlistsSagas} from './playlists/playlists.saga'
import {playerSagas} from './player/player.saga'
import {tracksSagas} from "./tracks/tracks.saga";
import {searchSagas} from "./search/search.saga";
import {shortcutsSagas} from "./home/home.saga";

export const sagas = [
  ...playlistsSagas,
  ...playerSagas,
  ...tracksSagas,
  ...searchSagas,
  ...shortcutsSagas,
]

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)))
  /*while (true) {
    // TODO: Get token and only after perform all actions with Spotify APIs
    yield take(userActions.setToken)
    yield all(sagas.map((saga) => fork(saga)))
  }*/
}
