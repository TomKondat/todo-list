import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfoOnLogin: (state, action) => {
      console.log(action);
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload.username));
    },
    logoutUser: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});
export const { setUserInfoOnLogin, logoutUser } = authSlice.actions;

export default authSlice.reducer;
