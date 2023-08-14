import { Space, Pagination, Skeleton, Row, Col } from "antd"
import { useState } from "react"
import { useGetAllPeopleQuery } from "../../store/services"
import { PeopleVariantMini } from "../people/mini/PeopleMini"

export const PeopleList = () => {
  const [page, setPage] = useState(1)
  const { data, isFetching } = useGetAllPeopleQuery(page)

  if (isFetching) {
    return (
      <>
        <Row gutter={[12, 12]}>
          {new Array(10).fill(null).map(() => (
            <Col xs={12} sm={6} md={4}>
              <PeopleVariantMini isLoading />
            </Col>
          ))}
        </Row>
        <Space size="large">
          <Skeleton.Input active size="large" />
        </Space>
      </>
    )
  }

  return (
    <>
      <Row gutter={[12, 12]}>
        {data?.results.map((e) => (
          <Col xs={12} sm={6} md={4}>
            <PeopleVariantMini data={e} />
          </Col>
        ))}
      </Row>
      <Space />
      <Pagination
        disabled={isFetching}
        showSizeChanger={false}
        pageSize={10}
        current={page}
        onChange={(page) => setPage(page)}
        total={data?.count}
      />
    </>
  )
}
