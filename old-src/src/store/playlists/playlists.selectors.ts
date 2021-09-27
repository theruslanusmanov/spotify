import {RootState} from '../root.state'

export const getPlaylists = (state: RootState) => state?.playlists?.playlists?.items
