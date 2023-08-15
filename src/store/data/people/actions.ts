import type { People } from 'src/types'
import { createAction } from '@reduxjs/toolkit'

export const setPeople = createAction<Partial<People>>('people/set')
