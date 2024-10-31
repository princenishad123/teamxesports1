import { configureStore } from '@reduxjs/toolkit'
import { api } from './querySlice.js'
import authReducer from "./Auth/authSlice.js"
import paymentReducer from './Auth/paymentSlice.js'
export default configureStore({
    reducer: {
    auth: authReducer,
    payment:paymentReducer,
      [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})