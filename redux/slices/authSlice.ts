import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { deleteCookie } from "cookies-next";

interface AuthState {
  token: string | null;
  user: { username: string } | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUser(state, action: PayloadAction<{ username: string }>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearToken(state) {
      state.token = null;
      state.isAuthenticated = false;
      deleteCookie("jwtToken");
    },
  },
});

export const selectAuthState = (state: RootState) => state.auth;
export const { setToken, setUser, clearToken } = authSlice.actions;
export default authSlice.reducer;
