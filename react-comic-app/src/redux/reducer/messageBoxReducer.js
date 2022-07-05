import { createSlice } from '@reduxjs/toolkit'

export const messageBoxReducer = createSlice({
  name: 'user',
  initialState: {
    show: false,
    title: "Xác nhận",
    content: "",
    ok: () => {},
    cancel: () => {},
  },
  reducers: {
    show: (state, action) => {
      const fn = () => {};
      state.show = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.ok = action.payload.ok || fn;
      state.cancel = action.payload.cancel || fn;
    },
    hide: (state, action) => {
      state.show = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { show, hide } = messageBoxReducer.actions

export default messageBoxReducer.reducer