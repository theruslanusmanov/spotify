import {call, put, select, takeEvery} from 'redux-saga/effects'
import {loadShortcuts, loadShortcutsError, loadShortcutsSuccess,} from './home.actions'
import {getUserToken} from "../user/user.selectors";
import {HomeApiService} from "../../services/api/home-api.service";

export function* loadShortcutsWatcher() {
  yield takeEvery(loadShortcuts.type, loadShortcutsWorker)
}

const homeApiService = new HomeApiService()

function* loadShortcutsWorker() {
  try {
    const token = yield select(getUserToken);
    const response = yield call(
      [homeApiService, homeApiService.getShortcuts],
      token)
    const json = yield response.json()
    yield put(loadShortcutsSuccess(json))
  } catch (error) {
    yield put(loadShortcutsError(error))
  }
}

export const shortcutsSagas = [loadShortcutsWatcher]
