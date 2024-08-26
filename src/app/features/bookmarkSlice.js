import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [1, 4, 5],
};

export const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    showMeState: (state) => {
      console.log(JSON.parse(JSON.stringify(state)));
    },
    add: (state, { payload }) => ({ ...state, ["ids"]: [...state.ids, Number(payload)] }),
    remove: (state, { payload }) => {
      const oldIds = JSON.parse(JSON.stringify(state.ids));
      const newIds = oldIds.filter((oldId) => oldId != Number(payload));
      return { ...state, ["ids"]: newIds };
    },
  },
});

export const { showMeState, add, remove } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
