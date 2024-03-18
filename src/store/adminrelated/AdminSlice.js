import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  response: null,
  error: null,
  currentDataType: null,
  //....add here
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.status = "loading";
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.status = "success";
    },
    authFailed: (state, action) => {
      state.loading = false;
      state.status = "failed";
      state.response = action.payload;
    },
    authError: (state, action) => {
      state.loading = false;
      state.status = "error";
      state.error = action.payload;
    },
    authSetCurrentRoleType: (state, action) => {
      state.loading = false;
      state.currentDataType = action.payload;
    },
  },
});

export const {
  authRequest,
  authSuccess,
  authError,
  authFailed,
  authSetCurrentRoleType,
  authLogout,
} = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
