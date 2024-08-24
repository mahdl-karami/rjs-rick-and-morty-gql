import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    showMeState: (state) => {
      console.log(JSON.parse(JSON.stringify(state)));
    },
  },
});

export const { showMeState } = charactersSlice.actions;
export default charactersSlice.reducer;
