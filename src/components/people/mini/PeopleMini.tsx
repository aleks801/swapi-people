import { useNavigate } from 'react-router-dom'
import { Card, Descriptions } from 'antd'

import { extractIdFromUrl } from '../../../utils'
import type { PeopleProps } from '../types'

export const PeopleVariantMini = ({ data, isLoading }: PeopleProps) => {
  const navigate = useNavigate()

  if (isLoading) {
    return <Card loading size="small" />
  }

  if (!data) {
    return null
  }

  const { name, gender, url, skin_color, mass } = data
  return (
    <Card title={name} hoverable size="small" onClick={() => navigate(`/${extractIdFromUrl(url)}`)}>
      <Descriptions column={1} size="small">
        <Descriptions.Item>{gender}</Descriptions.Item>
        <Descriptions.Item>{skin_color}</Descriptions.Item>
        <Descriptions.Item>{mass}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}
