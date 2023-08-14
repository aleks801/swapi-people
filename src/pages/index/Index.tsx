import { Space } from "antd"
import { PeopleList } from "../../components/peopleList/PeopleList"
import { PeopleSearch } from "../../components/peopleSearch/PeopleSearch"

const IndexPage = () => {
  return (
    <Space direction="vertical" align="center">
      <PeopleSearch />
      <PeopleList />
    </Space>
  )
}

export default IndexPage
