import { Skeleton } from 'antd'

import type { VehicleProps } from '../types'

export const VehicleVariantMini = ({ data, isLoading }: VehicleProps) => {
  if (isLoading) {
    return <Skeleton.Button active />
  }
  if (!data) {
    return null
  }
  const { name } = data
  return <>{name}</>
}
