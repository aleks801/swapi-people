import type { RootState } from 'src/store/types';

export const selectPeople = (state: RootState) => state.people;
