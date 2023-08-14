import { BaseObj } from "./base"

export type Vehicle = BaseObj & {
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  crew: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  passengers: string
  pilots: string[]
  films: string[]
  vehicle_class: string
}
