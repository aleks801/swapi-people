import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Vehicle } from "../../types"

const baseUrl = "https://swapi.dev/api/"

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVehicleByUrl: builder.query<Vehicle, string>({
      query: (url) => url,
    }),
  }),
})

export const { useGetVehicleByUrlQuery } = vehicleApi
