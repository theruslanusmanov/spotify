import {RootState} from '../root.state'
import {createSelector} from "reselect";

export const getTracksSelector = (state: RootState) => state?.tracks

export const getTracksItemsSelector = createSelector(
  [getTracksSelector],
  (tracks: any) => (tracks?.items?.items?.length > 0
    ? tracks?.items?.items
    : []),
)
