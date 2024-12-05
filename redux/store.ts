import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/searchSlice";
import { provincesApi } from "@/services/provinceApi";
import { trainsApi } from "@/services/trainsApi";
import { carriageApi } from "@/services/carriageApi";
import rootReducer from "./slices/rootSlice";
import { authApi } from "@/services/authApi";
import authSlice from "./slices/authSlice";
import { seatApi } from "@/services/seatApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      search: searchSlice,
      root: rootReducer,
      [authApi.reducerPath]: authApi.reducer,
      [provincesApi.reducerPath]: provincesApi.reducer,
      [trainsApi.reducerPath]: trainsApi.reducer,
      [carriageApi.reducerPath]: carriageApi.reducer,
      [seatApi.reducerPath]: seatApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        provincesApi.middleware,
        trainsApi.middleware,
        carriageApi.middleware,
        authApi.middleware,
        seatApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
