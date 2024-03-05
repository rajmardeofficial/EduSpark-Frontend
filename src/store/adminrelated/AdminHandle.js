import { authRequest, authSuccess, authFailed, authError } from "./AdminSlice";

export const addStudent = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addTeacher = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addLiberian = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addDocFacilitates = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addClass = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const publishNotice = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};
