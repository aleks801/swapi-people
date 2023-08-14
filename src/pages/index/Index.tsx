import { Space } from 'antd'
import { PeopleList } from 'src/components/peopleList/PeopleList'
import { PeopleSearch } from 'src/components/peopleSearch/PeopleSearch'

const IndexPage = () => {
  return (
    <Space direction="vertical" align="center">
      <PeopleSearch />
      <PeopleList />
    </Space>
  )
}

export default IndexPage
