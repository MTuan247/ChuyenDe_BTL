import { createSlice } from '@reduxjs/toolkit'

export const contextReducer = createSlice({
  name: 'user',
  initialState: {
    loading: false,
  },
  reducers: {
    mask: (state, action) => {
      state.loading = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { mask } = contextReducer.actions

export default contextReducer.reducer