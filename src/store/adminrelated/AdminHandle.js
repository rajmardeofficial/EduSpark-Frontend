import { authRequest, authSuccess, authFailed, authSetCurrentRoleType, authError, authAddSuccess } from "./AdminSlice";

export const setCurrentDataType = (fields) => async (dispatch) => {
  try {
    dispatch(authSetCurrentRoleType(fields))
  } catch (error) {
    console.log("error while setting currentDataType");
    console.log(error);
  }
}

export const getFlatformFee = (collegeId) => async(dispatch) => {
  try {
    console.log(collegeId);
  } catch (error) {
    console.error("Network Error:", error);
    dispatch(authError("Network Error."));
  }
}

// for getting key
// getKey
export const getKey = async (dispatch, to) => {
  try {
    console.log("hello key");
    let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/platformCharges/getkey/${to}`, {
      method: "get",
    });
    result = await result.json();
    
    if (result?.key) {
      // dispatch(authGetKey(result?.key));
      return result?.key;
    } else {
      dispatch(authFailed("Failed to get key"));
      throw new Error("Failed to get key");
    }
  } catch (error) {
    console.error("Network Error:", error);
    dispatch(authError("Network Error."));
    throw error;
  }
};

export const getCheckoutHandler = async (dispatch, amount, to) => {
  try {
    console.log(amount);
    let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/platformCharges/checkout/${to}`, {
      method: "post",
      body: JSON.stringify({ amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    
    if (result) {
      return result;
    }
  } catch (error) {
    console.error("Network Error:", error);
    dispatch(authError("Network Error."));
    throw error;
  }
};

export const addStudent = (fields,currentUser) => async (dispatch) => {
  dispatch(authRequest());
  const {roleType} = fields;
  console.log(roleType);
  try {
    console.log(fields);
    let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/admin/add-student/${roleType}`,{
      method:"post",
      body:JSON.stringify(fields),
      headers: {
        "Content-Type":"application/json",
        Authorization: `${currentUser?.token}`,
      }
    })
    result = await result.json();
    if(result?.message === "Student added successfully"){
      dispatch(authAddSuccess(result?.message));
    }else{
      dispatch(authFailed(result?.message));
    }
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const addTeacher = (fields,currentUser) => async (dispatch) => {
  const {roleType} = fields;
  dispatch(authRequest());
  console.log(roleType);
  try {
    console.log(fields);
    let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/admin/add-teacher/${roleType}`,{
      method:"post",
      body:JSON.stringify(fields),
      headers: {
        "Content-Type":"application/json",
        Authorization: `${currentUser?.token}`,
      }
    })
    result = await result.json();
    if(result?.message === "Teacher added successfully"){
      dispatch(authAddSuccess(result?.message));
    }else{
      dispatch(authFailed(result?.message));
    }
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

export const addAdminAccount = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};

export const docReqList = (fields) => async (dispatch) => {
  dispatch(authRequest());
  try {
    console.log(fields);
  } catch (error) {
    console.log(error);
    dispatch(authError(error?.message));
  }
};
