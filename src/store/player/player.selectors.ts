import {RootState} from "../root.state";
import {createSelector} from "reselect";

const getPlayer = (state: RootState) => state?.player?.audio

const getAudioTrack = createSelector(
    [ getPlayer ],
    audioTrack => new Audio(audioTrack)
)

export default getAudioTrack
