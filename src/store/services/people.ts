import type { People } from 'src/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const entityPrefix = 'people'
const baseUrl = 'https://swapi.dev/api/'

type AllPeopleResponse = {
  count: number
  next: string | null
  previous: string | null
  results: People[]
}

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
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
  }),
})

export const { useGetAllPeopleQuery, useGetPeopleByIdQuery, useLazySearchPeopleByNameQuery } = peopleApi
