import { configureStore } from "@reduxjs/toolkit";

//! import reducers
import charactersReducer from "./features/charectersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
