import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/searchSlice";
import { provincesApi } from "@/services/provinceApi";
import { trainsApi } from "@/services/trainsApi";
import { carriageApi } from "@/services/carriageApi";
import rootReducer from "./slices/rootSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchSlice,
      root: rootReducer,
      [provincesApi.reducerPath]: provincesApi.reducer,
      [trainsApi.reducerPath]: trainsApi.reducer,
      [carriageApi.reducerPath]: carriageApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(provincesApi.middleware, trainsApi.middleware, carriageApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
