import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  errors: false,
  data: {},
  type: "",
};

export const loginStatus = createAsyncThunk("loginUser", async (body) => {
  const res = await axios.post(url, body);
  const userData = await res.data;
  return userData;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginStatus.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [loginStatus.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [loginStatus.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default loginSlice.reducer;
