import { createReducer } from '@reduxjs/toolkit'

import { setPeople } from './actions'
import type { State } from './types'

const initialState: State = {}

export default createReducer(initialState, (builder) => {
  builder.addCase(setPeople, (state, action) => ({
    ...state,
    [action.payload.url!]: { ...state[action.payload.url!], ...action.payload },
  }))
})
