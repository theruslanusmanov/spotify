import {call, put, takeEvery} from 'redux-saga/effects'
import {
    fetchSongs,
    fetchSongsError,
    fetchSongsSuccess,
} from './spotify.actions'
import {SpotifyApiService} from '../../services/spotify-api.service'

export function* spotifySagaWatcher() {
    const action = yield takeEvery(fetchSongs.type, loadSongsSagaWorker)
}

const spotifyApiService = new SpotifyApiService()

function* loadSongsSagaWorker(action: any) {
    try {
        const response = yield call(spotifyApiService.getTracks, action.payload)
        let json = yield response.json();
        yield put(fetchSongsSuccess(json))
    } catch (error) {
        yield put(fetchSongsError(error))
    }
}

export const spotifySagas = [spotifySagaWatcher]
