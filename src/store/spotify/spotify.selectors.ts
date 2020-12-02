import {createSelector} from 'reselect'
import {RootState} from '../root.state'

export const getTracks = (state: RootState) => state?.spotify?.tracks
export const getPlaylists = (state: RootState) => state?.spotify?.playlists?.items

const getTrackSelector = createSelector(
  [getTracks],
  (tracks) => (tracks?.items?.length > 0
    ? tracks?.items[0]?.track?.preview_url
    : ''),
)

export default getTrackSelector
