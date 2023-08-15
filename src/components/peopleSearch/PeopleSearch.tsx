import { useCallback, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Select, Spin } from 'antd'
import debounce from 'lodash.debounce'
import { useLazySearchPeopleByNameQuery } from 'src/store/services'
import { extractIdFromUrl } from 'src/utils'

import type { SelectValue } from './types'

import styles from './PeopleSearch.module.scss'

const debounceTimeout = 300

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
              } as SelectValue)
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
      className={styles.root}
      mode="multiple"
      placeholder="Search for people"
      labelInValue
      filterOption={false}
      notFoundContent={
        fetching ? (
          <Row justify="center">
            <Spin className={styles.spin} />
          </Row>
        ) : null
      }
      onSearch={debounceFetcher}
      onChange={([{ value }]) => {
        navigate(`/${value}`)
      }}
      options={options}
    />
  )
}
