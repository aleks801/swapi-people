import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { People, PeopleFullfilled } from "../../types/people"
import { RootState } from "../types"
import { Starship } from "../../types/starship"

const entityPrefix = "people"
const baseUrl = "https://swapi.dev/api/"

type AllPeopleResponse = {
  count: number
  next: string | null
  previous: string | null
  results: People[]
}

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPeople: builder.query<AllPeopleResponse, number>({
      query: (page = 1) => `${entityPrefix}?page=${page}`,
    }),
    getPeopleById: builder.query<People, string>({
      query: (id) => `${entityPrefix}/${id}`,
    }),
    getPeopleByUrl: builder.query<People, string>({
      query: (url) => url,
    }),
    searchPeopleByName: builder.query<AllPeopleResponse, string>({
      query: (name) => `${entityPrefix}/?search=${name}`,
    }),

    updatePeople: builder.mutation({
      query: (initialEntry) => ({
        url: `/history/${initialEntry.Id}`,
        method: "PUT",
        body: {
          ...initialEntry,
          date: new Date().toISOString(),
        },
      }),
    }),
    // research
    getFullfilledPeopleById: builder.query<string, string>({
      queryFn: async (id, { getState }, _extraOptions, fetchWithBQ) => {
        const state = getState()

        const { data: people } = peopleApi.endpoints.getPeopleById.select(id)(state as unknown as RootState)
        const starships: Starship[] = []

        if (people) {
          if (people?.starships) {
            for (let id = 0; id < people?.starships.length; id++) {
              const starshipUrl = people?.starships[id]
              const response = await fetchWithBQ(starshipUrl)
              starships.push(response.data as Starship)
            }
          }

          const result: PeopleFullfilled = { ...people, starships: [] }
          result.starships = starships
        }

        return { data: "" }
      },
    }),
  }),
})

export const { useGetAllPeopleQuery, useGetPeopleByIdQuery, useGetFullfilledPeopleByIdQuery, useLazySearchPeopleByNameQuery } = peopleApi
