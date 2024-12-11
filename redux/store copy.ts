import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice from "./slices/searchSlice";
import { provincesApi } from "@/services/provinceApi";
import { trainsApi } from "@/services/trainsApi";
import { carriageApi } from "@/services/carriageApi";
import { authApi } from "@/services/authApi";
import authSlice from "./slices/authSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer"; // Import PersistPartial for type safety

// Tạo cấu hình persist
const persistConfig = {
  key: "root", // tên của root key trong storage
  storage, // sử dụng localStorage (có thể thay thế bằng sessionStorage)
  whitelist: ["auth"], // Chỉ lưu "auth" slice vào localStorage
};

// Tạo rootReducer
const rootReducer = combineReducers({
  auth: authSlice,
  search: searchSlice,
  [authApi.reducerPath]: authApi.reducer,
  [provincesApi.reducerPath]: provincesApi.reducer,
  [trainsApi.reducerPath]: trainsApi.reducer,
  [carriageApi.reducerPath]: carriageApi.reducer,
});

// Wrap persistReducer với rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình Store với redux-persist
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer, // Sử dụng persistedReducer thay cho rootReducer
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
        },
      }).concat(provincesApi.middleware, trainsApi.middleware, carriageApi.middleware, authApi.middleware),
  });

  // Tạo persistor
  const persistor = persistStore(store);

  return { store, persistor };
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["store"]["getState"]>;
export type AppDispatch = AppStore["store"]["dispatch"];
