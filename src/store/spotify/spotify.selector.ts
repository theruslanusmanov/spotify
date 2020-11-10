import {RootState} from "../root.state";
import {createSelector} from "reselect";

const getTracks = (state: RootState) => state?.spotify?.tracks

const getTrackSelector = createSelector(
    [ getTracks ],
    (tracks) => tracks?.items?.length > 0 ? tracks?.items[0]?.track?.preview_url : ''
)

export default getTrackSelector
