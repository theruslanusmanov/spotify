import {createAction} from "@reduxjs/toolkit";

const PREFIX = 'user'

export const setToken = createAction<string>(`${PREFIX}/setToken`)
