import {call, put, takeEvery} from 'redux-saga/effects'
import {authorize, authorizeError, authorizeSuccess,} from './authorization.actions'
import {AuthorizationApiService} from '../../services/api/authorization-api.service'

export function* authorizeWatcher() {
  yield takeEvery(authorize.type, authorizeWorker)
}

const authorizationApiService = new AuthorizationApiService()

function* authorizeWorker(action: any) {
  try {
    const response = yield call(authorizationApiService.authorize,
      action.payload)
    const json = yield response.json()

    yield put(authorizeSuccess(json))
  } catch (error) {
    yield put(authorizeError(error))
  }
}

export const authorizationSagas = [authorizeWatcher]
