import {RootState} from '../root.state'
import {createSelector} from "reselect";

export const getUserSelector = (state: RootState) => state.user
export const getUserToken = createSelector(
  [getUserSelector],
  (user) => user.token);