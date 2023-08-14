import { useGetVehicleByUrlQuery } from 'src/store/services'

import { VehicleVariantMini } from './mini/VehicleMini'

type Props = {
  url: string
}

export const Vehicle = ({ url }: Props) => {
  const { data, isFetching } = useGetVehicleByUrlQuery(url)

  return <VehicleVariantMini data={data} isLoading={isFetching} />
}
