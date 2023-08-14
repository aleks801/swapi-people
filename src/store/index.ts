import { configureStore } from "@reduxjs/toolkit"
import { peopleApi, starshipApi } from "./services"

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    [starshipApi.reducerPath]: starshipApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware, starshipApi.middleware),
  devTools: import.meta.env.DEV,
})
