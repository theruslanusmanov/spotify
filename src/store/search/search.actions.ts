import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'search'

const search = createAction(`${PREFIX}/search`)
const searchSuccess = createAction<any>(`${PREFIX}/searchSuccess`)
const searchError = createAction<any>(`${PREFIX}/searchError`)

export {
  search,
  searchSuccess,
  searchError
}
