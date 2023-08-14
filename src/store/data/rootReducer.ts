import { combineReducers } from '@reduxjs/toolkit'

import people from './people'

const rootReducer = combineReducers({
  people,
})

export default rootReducer
