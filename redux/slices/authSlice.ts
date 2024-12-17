import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { deleteCookie } from "cookies-next";

interface AuthState {
  token: string | null;
  user: { userName: string; id: string } | null;
  isAuthenticated: boolean;
  userId: string;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
  userId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUser(state, action) {
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
