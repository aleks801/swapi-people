import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Starship } from "../../types/starship"

const entityPrefix = "starships"
const baseUrl = "https://swapi.dev/api/"

export const starshipApi = createApi({
  reducerPath: "starshipApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStarshipById: builder.query<Starship, string>({
      query: (id) => `${entityPrefix}/${id}`,
    }),
    getStarshipByUrl: builder.query<Starship, string>({
      query: (url) => url,
    }),
  }),
})

export const { useGetStarshipByIdQuery, useGetStarshipByUrlQuery } = starshipApi
