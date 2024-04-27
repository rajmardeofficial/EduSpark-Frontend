import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : "idle",
    currentUser : JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    response:null,
    error:null,
    docsListOfStudent:[],

}

const studentSlice = createSlice({
    name : "admin",
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
          requestSuccess: (state, action) => {
            state.loading = false;
            state.status = "success";
            state.response = action.payload;
          },
          authGetDocsOfStudent: (state, action) => {
            state.loading = false;
            state.docsListOfStudent = action.payload;
          },
    }
});

export const {
    authRequest,
    authSuccess,
    authError,
    authFailed,
    requestSuccess,
    authGetDocsOfStudent,
    authLogout,
  } = studentSlice.actions;

export const studentReducer = studentSlice.reducer;