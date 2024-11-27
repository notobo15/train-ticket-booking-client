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
export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const { setIsLoading } = rootSlice.actions;

// Export reducer
export default rootSlice.reducer;

// Export selector
export const selectRootState = (state: RootState) => state.root;
