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
    getLocalIds: (state, { payload }) => {
      return { ...state, ["ids"]: payload || [] };
    },
    add: (state, { payload }) => {
      state.ids.push(Number(payload));
      //* set new ids to localstorage
      localStorage.setItem("ids", JSON.stringify(state.ids));
      return state;
    },
    remove: (state, { payload }) => {
      const oldIds = JSON.parse(JSON.stringify(state.ids));
      const newIds = oldIds.filter((oldId) => oldId != Number(payload));
      state.ids = newIds;
      //* set new ids to localstorage
      localStorage.setItem("ids", JSON.stringify(state.ids));
      return state;
    },
  },
});

export const { showMeState, add, remove, getLocalIds } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
