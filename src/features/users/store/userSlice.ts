import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  email: null | string;
};

const initialState: UserState = {
  email: null,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    removeUser(state) {
      state.email = null;
    },
    setUser(state, action: PayloadAction<{ email: null | string }>) {
      state.email = action.payload.email;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
