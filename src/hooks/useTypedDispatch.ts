import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'src/store/types'

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch
