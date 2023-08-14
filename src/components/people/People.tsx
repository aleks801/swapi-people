import { PeopleVariantFull } from "./full/PeopleFull"
import { PeopleVariantMini } from "./mini/PeopleMini"
import type { PeopleProps } from "./types"

type Props = PeopleProps & {
  variant: "mini" | "full"
}

export const People = ({ variant, data, isLoading }: Props) => {
  const Component = variant === "mini" ? PeopleVariantMini : PeopleVariantFull
  return <Component data={data} isLoading={isLoading} />
}
