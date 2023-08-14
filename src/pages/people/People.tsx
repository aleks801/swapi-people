import { useParams } from "react-router-dom"
import { useGetPeopleByIdQuery } from "../../store/services"
import { Starship } from "../../components/starship/Starship"

const PeoplePage = () => {
  const { peopleId } = useParams()
  const { isLoading, data } = useGetPeopleByIdQuery(peopleId || "")

  if (isLoading) {
    return <>Loading</>
  }

  if (!data) {
    return <>No data</>
  }

  return (
    <>
      {data.starships.map((url) => (
        <Starship url={url} />
      ))}

      {JSON.stringify(data)}
    </>
  )
}

export default PeoplePage
