import { Card } from "antd"
import type { PeopleProps } from "../types"

export const PeopleVariantMini = ({ data, isLoading }: PeopleProps) => {
  if (isLoading) {
    return <Card loading size="small" />
  }

  if (!data) {
    return null
  }

  const { name, gender } = data
  return (
    <Card title={name} hoverable size="small">
      {gender}
    </Card>
  )
}
