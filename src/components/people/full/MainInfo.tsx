import { useEffect, useState } from 'react'
import { Avatar, Card, Col, Descriptions, Input, Row } from 'antd'
import useTypedDispatch from 'src/hooks/useTypedDispatch'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { setPeople } from 'src/store/data/people'
import { selectPeople } from 'src/store/data/people/selectors'
import type { PlainPeople } from 'src/types'
import { CheckOutlined, EditOutlined } from '@ant-design/icons'

import { getAbbroviation } from './utils'

const Item = Descriptions.Item

export const MainInfo = (data: PlainPeople) => {
  const storedPeople = useTypedSelector(selectPeople)[data.url] || {}
  const dispatch = useTypedDispatch()

  const mergedObj = { ...data, ...storedPeople }
  const { name, skin_color, hair_color, mass, birth_year, eye_color, gender } = mergedObj

  const [edit, setEdit] = useState(false)
  const [editablePeople, setEditablePeople] = useState<Record<string, string>>({})
  const onChangeEditableProp = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditablePeople({
      ...editablePeople,
      [prop]: event.target.value,
    })
  }

  useEffect(() => {
    if (!edit) {
      if ('name' in editablePeople) {
        dispatch(setPeople({ ...data, ...editablePeople }))
        setEditablePeople({})
      }
    } else {
      setEditablePeople(mergedObj)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit])

  return (
    <Card>
      <Descriptions
        column={2}
        title={
          <Row justify="space-between">
            <Col>{name}</Col>
            <Col style={{ cursor: 'pointer' }} onClick={() => setEdit((prev) => !prev)}>
              {edit ? <CheckOutlined /> : <EditOutlined />}
            </Col>
          </Row>
        }
      >
        <Item span={2}>
          <Avatar shape="square" size={60} style={{ background: '#c8b71c' }}>
            {getAbbroviation(name)}
          </Avatar>
        </Item>
        <Item span={2} label="Gender">
          {edit ? <Input size="small" value={editablePeople.gender} onChange={onChangeEditableProp('gender')} /> : gender}
        </Item>
        <Item label="Skin color">
          {edit ? <Input size="small" value={editablePeople.skin_color} onChange={onChangeEditableProp('skin_color')} /> : skin_color}
        </Item>
        <Item label="Hair color">
          {edit ? <Input size="small" value={editablePeople.hair_color} onChange={onChangeEditableProp('hair_color')} /> : hair_color}
        </Item>
        <Item span={2} label="Eye color">
          {edit ? <Input size="small" value={editablePeople.eye_color} onChange={onChangeEditableProp('eye_color')} /> : eye_color}
        </Item>
        <Item label="Mass">{edit ? <Input size="small" value={editablePeople.mass} onChange={onChangeEditableProp('mass')} /> : mass}</Item>
        <Item label="Birth year">
          {edit ? <Input size="small" value={editablePeople.birth_year} onChange={onChangeEditableProp('birth_year')} /> : birth_year}
        </Item>
      </Descriptions>
    </Card>
  )
}
