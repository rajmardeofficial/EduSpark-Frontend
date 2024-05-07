import { authRequest, authSuccess, authFailed, authError, authLogout } from "./FormSlice";

// This is demo about how i am going to work on api

export const loginUser = (fields) => async (dispatch) => {
  const { email,password,role } = fields;
  console.log(email, password,role);
  dispatch(authRequest());
  try {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/login`, {
      method: "post",
      body: JSON.stringify({ email, password,role }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if(result?.token){
      dispatch(authSuccess(result));
    }else{
      dispatch(authFailed(result.message));
    }
  } catch (error) {
    console.log(error);
    dispatch(authError(error.message));
  }
};


export const RegisterUser = (fields) => async(dispatch) => {

  dispatch(authRequest());
  try {

  } catch (error) {
    dispatch(authError(error.message));
  }
}

export const LogoutUser = () => async(dispatch) => {
  try {
    dispatch(authLogout());
  } catch (error) {
    console.log(error);
  }
}