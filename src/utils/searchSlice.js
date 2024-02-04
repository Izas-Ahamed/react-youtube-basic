import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { cachedResults: {} },
  reducers: {
    addCacheResults: (state, action) => {
      state.cachedResults = { ...state.cachedResults, ...action.payload };
    },
  },
});
export const { addCacheResults } = searchSlice.actions;

export default searchSlice.reducer;
