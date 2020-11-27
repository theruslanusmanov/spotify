import { all, fork } from 'redux-saga/effects'
import { spotifySagas } from './spotify/spotify.saga'
import { playerSagas } from './player/player.saga'

export const sagas = [
  ...spotifySagas,
  ...playerSagas
]

export default function * rootSaga () {
  yield all(sagas.map((saga) => fork(saga)))
}
