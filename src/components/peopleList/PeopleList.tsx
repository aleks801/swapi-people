import { useState } from 'react'
import { Col, Pagination, Row, Skeleton, Space } from 'antd'
import useTypedSelector from 'src/hooks/useTypedSelector'
import { selectPeople } from 'src/store/data/people/selectors'
import { useGetAllPeopleQuery } from 'src/store/services'

import { PeopleVariantMini } from '../people/mini/PeopleMini'

import styles from './PeopleList.module.scss'

const pageSize = 10

export const PeopleList = () => {
  const storedPeople = useTypedSelector(selectPeople)
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useGetAllPeopleQuery(page)
  const items = isFetching ? new Array(10).fill(null) : data!.results

  return (
    <Space direction="vertical" align="center" className={styles.root}>
      <Row gutter={[12, 12]}>
        {items.map((item) => {
          const mergedObj = !isFetching && { ...item, ...(storedPeople || {})[item.url] }

          return (
            <Col xs={12} sm={6} md={4}>
              <PeopleVariantMini data={mergedObj} isLoading={isFetching} />
            </Col>
          )
        })}
      </Row>
      {isLoading ? (
        <Space size="large">
          <Skeleton.Input active size="large" />
        </Space>
      ) : (
        <Pagination
          disabled={isFetching}
          showSizeChanger={false}
          pageSize={pageSize}
          current={page}
          onChange={(page) => setPage(page)}
          total={data?.count}
        />
      )}
    </Space>
  )
}
