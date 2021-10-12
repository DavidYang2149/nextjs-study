import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { SampleState } from 'src/types/sample';

export type SampleReducer = ReturnType<typeof reducer>;

const initialState: SampleState = {
  sample: '',
};

const { actions, reducer } = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    setSample(state, { payload: { name, value } }: PayloadAction<{ name: string, value: string }>) {
      return {
        ...state,
        [name]: value,
      };
    },
  },
});

export const getSample = () => async (dispatch: Dispatch<PayloadAction<{ name: string, value: string }>>) => {
  dispatch(actions.setSample({ name: 'sample', value: 'result' }));
};

export const {
  setSample,
} = actions;

export default reducer;
