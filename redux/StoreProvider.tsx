"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

persistStore(store);
export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
