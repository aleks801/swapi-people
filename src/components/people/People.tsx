import type { People as PeopleType } from "../../types"
import { PeopleVariantFull } from "./full/PeopleFull"
import { PeopleVariantMini } from "./mini/PeopleMini"

type Props = {
  variant: "mini" | "full"
  data: PeopleType
}

export const People = ({ variant, data }: Props) => {
  if (variant === "mini") {
    return <PeopleVariantMini data={data} isLoading={false} />
  }
  return <PeopleVariantFull {...data} />
}
