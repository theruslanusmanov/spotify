import {call, takeEvery} from 'redux-saga/effects'
import {authorize,} from './authorization.actions'
import {AuthorizationApiService} from '../../services/api/authorization-api.service'

export function* authorizeWatcher() {
  yield takeEvery(authorize.type, authorizeWorker)
}

const authorizationApiService = new AuthorizationApiService()

function* authorizeWorker(action: any) {
  try {
    yield call(
      authorizationApiService.authorize,
      action.payload
    )
  } catch (error) {
    console.log(error)
  }
}

export const authorizationSagas = [authorizeWatcher]
