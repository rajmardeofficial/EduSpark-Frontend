import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : "idle",
    currentUser : JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    response:null,
    error:null,
    listOfAllSubject:[],
    listOfAllAttendanceOfStudent:[],
    listOfCurrentMonthAttendance:[],
    listOfPreviousMonthAttendance:[],
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
          authGetListOfSubject: (state, action) => {
            state.loading = false;
            state.listOfAllSubject = action.payload;
          },
          authGetTotalAttendanceOfStudent: (state, action) => {
            state.loading = false;
            state.listOfAllAttendanceOfStudent = action.payload;
          },
          authGetAttendanceOfParSubAndMonth:(state, action) => {
            state.loading = false;
            state.listOfCurrentMonthAttendance = action.payload?.currentMonthAttendance;
            state.listOfPreviousMonthAttendance = action.payload?.previousMonthAttendance;
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
    authGetListOfSubject,
    authGetTotalAttendanceOfStudent,
    authGetAttendanceOfParSubAndMonth,
    authGetDocsOfStudent,
    authLogout,
  } = studentSlice.actions;

export const studentReducer = studentSlice.reducer;