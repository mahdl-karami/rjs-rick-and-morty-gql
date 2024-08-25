import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    showMeState: (state) => {
      console.log(JSON.parse(JSON.stringify(state)));
    },
  },
});

export const { showMeState } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
