import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/CounterSlice'
export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})