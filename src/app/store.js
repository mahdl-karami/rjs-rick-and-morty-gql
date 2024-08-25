import { configureStore } from "@reduxjs/toolkit";

//! import reducers
import bookmarkReducer from "./features/bookmarkSlice";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});
