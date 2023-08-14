import { useCallback, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select, Spin } from 'antd'
import debounce from 'lodash.debounce'
import { useLazySearchPeopleByNameQuery } from 'src/store/services'
import { extractIdFromUrl } from 'src/utils'

const debounceTimeout = 300

type SelectValue = {
  label: string
  value: string
}

export const PeopleSearch = () => {
  const [searchPeople] = useLazySearchPeopleByNameQuery()
  const navigate = useNavigate()
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState<SelectValue[]>([])
  const fetchRef = useRef(0)

  const fetchPeopleList = useCallback(
    (name: string) =>
      searchPeople(name)
        .unwrap()
        .then((peopleList) =>
          peopleList.results.map(
            (people) =>
              ({
                label: people.name,
                value: extractIdFromUrl(people.url),
              }) as SelectValue
          )
        ),
    [searchPeople]
  )

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])

      if (value) {
        setFetching(true)
        fetchPeopleList(value).then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return
          }

          setOptions(newOptions)
          setFetching(false)
        })
      }
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchPeopleList])

  return (
    <Select
      mode="multiple"
      placeholder="Search for people"
      labelInValue
      filterOption={false}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      style={{ width: 250 }}
      onSearch={debounceFetcher}
      onChange={([{ value }]) => {
        navigate(`/${value}`)
      }}
      options={options}
    />
  )
}
