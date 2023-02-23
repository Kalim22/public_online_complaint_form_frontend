import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/Slices/Index";

export const Store = configureStore({
  reducer: rootReducers,
});
