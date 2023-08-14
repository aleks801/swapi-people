import type { BaseObj } from "./base"

export type Starship = BaseObj & {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  crew: string
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  passengers: string
  films: string[]
  pilots: string[]
  starship_class: string
}
