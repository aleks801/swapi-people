import { useGetStarshipByUrlQuery } from 'src/store/services'

import { StarshipVariantMini } from './mini/StarshipMini'

type Props = {
  url: string
}

export const Starship = ({ url }: Props) => {
  const { data, isFetching } = useGetStarshipByUrlQuery(url)

  return <StarshipVariantMini data={data} isLoading={isFetching} />
}
