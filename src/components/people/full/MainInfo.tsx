import { Avatar, Card, Descriptions } from 'antd'
import type { People } from 'src/types'

import { getAbbroviation } from './utils'

export const MainInfo = (data: People) => {
  const { name, skin_color, hair_color, mass, birth_year, eye_color } = data

  return (
    <Card>
      <Descriptions column={2} title={name}>
        <Descriptions.Item span={2}>
          <Avatar shape="square" size={60} style={{ background: '#c8b71c' }}>
            {getAbbroviation(name)}
          </Avatar>
        </Descriptions.Item>
        <Descriptions.Item label="Skin color">{skin_color}</Descriptions.Item>
        <Descriptions.Item label="Hair color">{hair_color}</Descriptions.Item>
        <Descriptions.Item span={2} label="Eye color">
          {eye_color}
        </Descriptions.Item>
        <Descriptions.Item label="Mass">{mass}</Descriptions.Item>
        <Descriptions.Item label="Birth year">{birth_year}</Descriptions.Item>
      </Descriptions>
    </Card>
  )
}
