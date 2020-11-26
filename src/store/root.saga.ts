import { all, fork } from 'redux-saga/effects'
import { spotifySagas } from './spotify/spotify.saga'

export const sagas = [
  ...spotifySagas,
]

export default function * rootSaga () {
  yield all(sagas.map((saga) => fork(saga)))
}
