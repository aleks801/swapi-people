import { useEffect, useState } from 'react'
import { Avatar, Card, Col, Descriptions, Row, Typography } from 'antd'
import useTypedDispatch from 'src/hooks/useTypedDispatch'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { setPeople } from 'src/store/data/people'
import { selectPeople } from 'src/store/data/people/selectors'
import type { PlainPeople } from 'src/types'
import { CheckOutlined, EditOutlined } from '@ant-design/icons'

import { getAbbroviation } from '../utils'

import { EditableField } from './EditableField'

import styles from './MainInfo.module.scss'

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
            <Col>
              <Typography.Title level={3} className={styles.title}>
                {name}
              </Typography.Title>
            </Col>
            <Col className={styles.editIcon} onClick={() => setEdit((prev) => !prev)}>
              {edit ? <CheckOutlined /> : <EditOutlined />}
            </Col>
          </Row>
        }
      >
        <Item span={2} labelStyle={{ alignItems: 'center' }}>
          <Avatar shape="square" size={60} className={styles.avatar}>
            {getAbbroviation(name)}
          </Avatar>
        </Item>
        <Item span={2} label="Gender" labelStyle={{ alignItems: 'center' }}>
          <EditableField edit={edit} value={gender} editValue={editablePeople.gender} onChange={onChangeEditableProp('gender')} />
        </Item>
        <Item label="Skin color" labelStyle={{ alignItems: 'center' }}>
          <EditableField
            edit={edit}
            value={skin_color}
            editValue={editablePeople.skin_color}
            onChange={onChangeEditableProp('skin_color')}
          />
        </Item>
        <Item label="Hair color" labelStyle={{ alignItems: 'center' }}>
          <EditableField
            edit={edit}
            value={hair_color}
            editValue={editablePeople.hair_color}
            onChange={onChangeEditableProp('hair_color')}
          />
        </Item>
        <Item span={2} label="Eye color" labelStyle={{ alignItems: 'center' }}>
          <EditableField edit={edit} value={eye_color} editValue={editablePeople.eye_color} onChange={onChangeEditableProp('eye_color')} />
        </Item>
        <Item label="Mass" labelStyle={{ alignItems: 'center' }}>
          <EditableField edit={edit} value={mass} editValue={editablePeople.mass} onChange={onChangeEditableProp('mass')} />
        </Item>
        <Item label="Birth year" labelStyle={{ alignItems: 'center' }}>
          <EditableField
            edit={edit}
            value={birth_year}
            editValue={editablePeople.birth_year}
            onChange={onChangeEditableProp('birth_year')}
          />
        </Item>
      </Descriptions>
    </Card>
  )
}
