import { configureStore } from "@reduxjs/toolkit";
import { todoApiSlice } from "./slices/todoApiSlice";
const store = configureStore({
  reducer: {
    [todoApiSlice.reducerPath]: todoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApiSlice.middleware),
  devTools: true,
});
export default store;
