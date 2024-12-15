import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import searchSlice from "./slices/searchSlice";
import { provincesApi } from "@/services/provinceApi";
import { trainsApi } from "@/services/trainsApi";
import { carriageApi } from "@/services/carriageApi";
import homeReducer from "./slices/homeSlice";
import { authApi } from "@/services/authApi";
import authSlice from "./slices/authSlice";
import { seatApi } from "@/services/seatApi";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { bookingApi } from "@/services/bookingApi";
import { orderApi } from "@/services/orderApi";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const seachPersistConfig = {
  key: "seach",
  storage: storage,
};
const authPersistConfig = {
  key: "auth",
  storage: storage,
};
const persistedReducer = persistReducer(seachPersistConfig, searchSlice);
const authPersistedReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  search: persistedReducer,
  home: homeReducer,
  [authApi.reducerPath]: authApi.reducer,
  [provincesApi.reducerPath]: provincesApi.reducer,
  [trainsApi.reducerPath]: trainsApi.reducer,
  [carriageApi.reducerPath]: carriageApi.reducer,
  [seatApi.reducerPath]: seatApi.reducer,
  [bookingApi.reducerPath]: bookingApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      provincesApi.middleware,
      trainsApi.middleware,
      carriageApi.middleware,
      authApi.middleware,
      seatApi.middleware,
      bookingApi.middleware,
      orderApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
