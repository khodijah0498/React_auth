import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    token: null,
    user: null,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser(state, action) {
      const { token, user } = action.payload;
      return {
        ...state.auth,
        token,
        user,
      };
    },
  },
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
