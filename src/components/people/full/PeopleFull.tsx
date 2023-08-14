import { Avatar, Card, Col, Descriptions, Empty, Row, Spin, Typography } from "antd"
import { Starship } from "../../starship/Starship"
import { PeopleProps } from "../types"
import { Vehicle } from "../../vehicle/Vehicle"
import { getAbbroviation } from "./utils"

export const PeopleVariantFull = ({ data, isLoading }: PeopleProps) => {
  if (isLoading) {
    return <Spin />
  }

  if (!data) {
    return <Empty />
  }

  const { name, skin_color, hair_color, mass, birth_year, eye_color, starships, vehicles } = data

  return (
    <Row gutter={8}>
      <Col span={16}>
        <Card>
          <Descriptions column={2} title={name}>
            <Descriptions.Item span={2}>
              <Avatar shape="square" size={60} style={{ background: "#c8b71c" }}>
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
      </Col>
      <Col span={8}>
        <Row gutter={[8, 8]}>
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
