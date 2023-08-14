import { Space, Pagination, Skeleton, Row, Col } from "antd"
import { useState } from "react"
import { useGetAllPeopleQuery } from "../../store/services"
import { PeopleVariantMini } from "../people/mini/PeopleMini"
import styles from "./PeopleList.module.scss"

export const PeopleList = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useGetAllPeopleQuery(page)
  const items = isFetching ? new Array(10).fill(null) : data!.results

  return (
    <Space direction="vertical" align="center" className={styles.root}>
      <Row gutter={[12, 12]}>
        {items.map((item) => (
          <Col xs={12} sm={6} md={4}>
            <PeopleVariantMini data={item} isLoading={isFetching} />
          </Col>
        ))}
      </Row>
      {isLoading ? (
        <Space size="large">
          <Skeleton.Input active size="large" />
        </Space>
      ) : (
        <Pagination
          disabled={isFetching}
          showSizeChanger={false}
          pageSize={10}
          current={page}
          onChange={(page) => setPage(page)}
          total={data?.count}
        />
      )}
    </Space>
  )
}
