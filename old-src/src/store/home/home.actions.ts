import {createAction} from '@reduxjs/toolkit'

const PREFIX = 'home'

const loadShortcuts = createAction(`${PREFIX}/loadShortcuts`)
const loadShortcutsSuccess = createAction<any>(`${PREFIX}/loadShortcutsSuccess`)
const loadShortcutsError = createAction<any>(`${PREFIX}/loadShortcutsError`)

export {
  loadShortcuts,
  loadShortcutsSuccess,
  loadShortcutsError
}
