import { configureStore } from '@reduxjs/toolkit'
import characterReducer, {  } from "./characterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  
  },
})
