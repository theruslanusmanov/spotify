import {RootState} from '../root.state'

export const getPlaylists = (state: RootState) => state?.spotify?.playlists?.items
