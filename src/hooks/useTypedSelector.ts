import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'src/store/types';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
