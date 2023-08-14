import { Skeleton } from "antd"
import type { StarshipProps } from "../types"

export const StarshipVariantMini = ({ data, isLoading }: StarshipProps) => {
  if (isLoading) {
    return <Skeleton.Button active />
  }
  if (!data) {
    return null
  }
  const { name } = data
  return <>{name} mini</>
}
