import {call, put, select, takeEvery} from 'redux-saga/effects'
import {search, searchError, searchSuccess,} from './search.actions'
import {getUserToken} from "../user/user.selectors";
import {QueryParameters, QueryType, SearchApiService} from "../../services/api/search-api.service";

export function* searchWatcher() {
  yield takeEvery(search, searchWorker)
}

const searchApiService = new SearchApiService()

function* searchWorker() {
  try {
    const token = yield select(getUserToken);
    const params: QueryParameters = {
      q: 'abc',
      type: QueryType.ARTIST,
    }
    const response = yield call(
      [searchApiService, searchApiService.search],
      token, params)
    const json = yield response.json()
    yield put(searchSuccess(json))
  } catch (error) {
    yield put(searchError(error))
  }
}

export const searchSagas = [searchWatcher]
