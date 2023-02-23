import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "../login/LoginSlice";

const rootReducers = combineReducers({
  login: LoginSlice,
});

export default rootReducers;
