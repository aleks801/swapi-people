import { BaseObj } from "./base"

export type Planet = BaseObj & {
  climate: string
  diameter: string
  films: string[]
  gravity: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
}
