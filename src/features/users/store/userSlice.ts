import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthState } from '@/features/auth';

const initialState = {
  authState: AuthState.PENDING,
  email: '',
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    removeUser(state) {
      state.email = '';
      state.authState = AuthState.NOT_AUTHENTICATED;
    },
    setUser(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
      state.authState = AuthState.AUTHENTICATED;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
