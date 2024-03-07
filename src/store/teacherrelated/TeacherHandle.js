import { authRequest, authSuccess, authFailed, authError } from "./TeacherSlice";

export const getStudentList = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const takingStudentsAttendance = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addTest = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addMarks = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addNotice = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

// progress --

export const addNotes = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

