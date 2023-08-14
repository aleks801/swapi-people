import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store/types'

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch
