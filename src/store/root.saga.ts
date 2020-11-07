import { all, fork } from 'redux-saga/effects'
import { spotifySagas } from './spotify/spotify.saga'

// https://bitbucket.org/owlruslan/diginavis-test-project/src/master/src/store/root/root.sagas..ts

export const sagas = [
  ...spotifySagas,
]

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
