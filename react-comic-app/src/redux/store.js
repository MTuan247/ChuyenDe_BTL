import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userReducer'
import contextReducer from './reducer/contextReducer'
import messageBoxReducer from './reducer/messageBoxReducer'

export default configureStore({
  reducer: {
    userReducer: userReducer,
    contextReducer: contextReducer,
    messageBoxReducer: messageBoxReducer,
  },
})