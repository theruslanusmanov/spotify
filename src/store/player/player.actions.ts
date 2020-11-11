import { createAction } from '@reduxjs/toolkit'

const PREFIX = 'player'

const play = createAction(`${PREFIX}/play`)
const pause = createAction(`${PREFIX}/pause`)


export {
  play,
  pause,
}
