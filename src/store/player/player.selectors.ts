import {createSelector} from 'reselect'
import {RootState} from '../root.state'

const getPlayer = (state: RootState) => state?.player?.audio

const getAudioTrack = createSelector(
  [getPlayer],
  (audioTrack) => new Audio(audioTrack),
)

export default getAudioTrack
