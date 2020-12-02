import {all, fork} from 'redux-saga/effects'
import {spotifySagas} from './spotify/spotify.saga'
import {playerSagas} from './player/player.saga'
import {authorizationSagas} from "./authorization/authorization.saga";

export const sagas = [
  ...spotifySagas,
  ...playerSagas,
  ...authorizationSagas
]

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)))
}
