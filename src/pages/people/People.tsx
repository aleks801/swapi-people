import { useParams } from 'react-router-dom'
import { Space } from 'antd'
import { People } from 'src/components/people/People'
import { useGetPeopleByIdQuery } from 'src/store/services'

const PeoplePage = () => {
  const { peopleId } = useParams()
  const { isLoading, data } = useGetPeopleByIdQuery(peopleId || '')

  return (
    <Space>
      <People variant="full" data={data} isLoading={isLoading} />
    </Space>
  )
}

export default PeoplePage
