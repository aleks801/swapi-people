import type { BaseObj } from './base'

export type People = BaseObj & {
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  films: string[]
  homeworld: string
  species: string[]
  starships: string[]
  vehicles: string[]
}

export type PlainPeople = Omit<People, 'starships' | 'species' | 'vehicles' | 'films'>
