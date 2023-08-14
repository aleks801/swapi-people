import { configureStore } from "@reduxjs/toolkit"
import { peopleApi, starshipApi, vehicleApi } from "./services"

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    [starshipApi.reducerPath]: starshipApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware, starshipApi.middleware, vehicleApi.middleware),
  devTools: import.meta.env.DEV,
})
