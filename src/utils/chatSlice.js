import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addChatMessage: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) state.messages.splice(0, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessage } = chatSlice.actions;

export default chatSlice.reducer;
