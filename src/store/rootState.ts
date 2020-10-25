import { userInitialState, UserState } from './user/user.state'

export const initialState: RootState = {
  user: userInitialState
}

export interface RootState {
  user: UserState
}
