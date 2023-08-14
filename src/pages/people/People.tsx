import { useParams } from "react-router-dom"
import { useGetPeopleByIdQuery } from "../../store/services"
import { People } from "../../components/people/People"
import { Space } from "antd"

const PeoplePage = () => {
  const { peopleId } = useParams()
  const { isLoading, data } = useGetPeopleByIdQuery(peopleId || "")

  return (
    <Space >
      <People variant="full" data={data} isLoading={isLoading} />
    </Space>
  )
}

export default PeoplePage
