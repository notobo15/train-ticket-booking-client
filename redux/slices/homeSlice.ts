import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define initial state type
interface IInitialState {
  isLoading: boolean;
}

// Define initial state
const initialState: IInitialState = {
  isLoading: false,
};

// Create slice
export const homeSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const { setIsLoading } = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;

// Export selector
export const selectHomeState = (state: RootState) => state.home;
