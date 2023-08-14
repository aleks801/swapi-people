import type { BaseObj } from "./base"
import type { Starship } from "./starship"

export type People = BaseObj & {
  birth_year: string
  eye_color: string
  gender: "male" | "female" | "none"
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

export type PeopleFullfilled = Omit<People, "starships"> & {
  starships: Starship[]
}
