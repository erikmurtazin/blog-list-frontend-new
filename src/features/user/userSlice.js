import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkUserLogin(state, action) {
      return action.payload;
    },
    logoutUser() {
      return null;
    },
  },
});

export const { checkUserLogin, logoutUser } = userSlice.actions;
export default userSlice.reducer;
