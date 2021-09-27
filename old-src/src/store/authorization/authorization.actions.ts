import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'authorization'

const authorize = createAction<any>(`${PREFIX}/authorize`)
const authorizeSuccess = createAction<any>(`${PREFIX}/authorizeSuccess`)
const authorizeError = createAction<any>(`${PREFIX}/authorizeError`)

export {
  authorize,
  authorizeSuccess,
  authorizeError,
}
