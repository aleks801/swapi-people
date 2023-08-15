import { Card, Col, Descriptions, Empty, Row, Spin, Typography } from 'antd'
import { Starship } from 'src/components/starship/Starship'
import { Vehicle } from 'src/components/vehicle/Vehicle'

import type { PeopleProps } from '../types'

import { MainInfo } from './MainInfo/MainInfo'

export const PeopleVariantFull = ({ data, isLoading }: PeopleProps) => {
  if (isLoading) {
    return <Spin />
  }

  if (!data) {
    return <Empty />
  }

  const { starships, vehicles } = data

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={16}>
        <MainInfo {...data} />
      </Col>
      <Col xs={24} md={8}>
        <Row gutter={[16, 16]}>
          <Col>
            <Card>
              <Descriptions column={1} title={<Typography>Starships</Typography>}>
                {!starships.length && (
                  <Descriptions.Item>
                    <Typography.Text>No items</Typography.Text>
                  </Descriptions.Item>
                )}
                {starships.map((url) => (
                  <Descriptions.Item>
                    <Starship url={url} />
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Card>
          </Col>
          <Col>
            <Card>
              <Descriptions column={1} title={<Typography>Vehicles</Typography>}>
                {!vehicles.length && (
                  <Descriptions.Item>
                    <Typography.Text>No items</Typography.Text>
                  </Descriptions.Item>
                )}
                {vehicles.map((url) => (
                  <Descriptions.Item>
                    <Vehicle url={url} />
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
