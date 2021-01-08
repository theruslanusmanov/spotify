import {all, fork} from 'redux-saga/effects'
import {spotifySagas} from './spotify/spotify.saga'
import {playerSagas} from './player/player.saga'
import {tracksSagas} from "./tracks/tracks.saga";

export const sagas = [
  ...spotifySagas,
  ...playerSagas,
  ...tracksSagas,
]

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)))
}
