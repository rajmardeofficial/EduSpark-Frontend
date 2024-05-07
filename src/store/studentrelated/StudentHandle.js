import { authRequest,authError, requestSuccess, authFailed, authGetListOfSubject, authGetTotalAttendanceOfStudent, authGetAttendanceOfParSubAndMonth, authGetDocsOfStudent, } from "./StudentSlice";

//Home api


//Attendace api
export const getAllAttendanceOfStudent = (fields,currentUser) => async(dispatch) => {
    const {id} = currentUser;
    const studentId = id;
    dispatch(authRequest());
    console.log(currentUser?.token,studentId,fields);
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getattendance/${studentId}`, {
            method:"post",
            body:JSON.stringify(fields),
            headers: {
                "Content-Type":"application/json",
                Authorization: `${currentUser?.token}`,
            }
        })
        result = await result.json();
        if(result?.message === "Internal server error"){
            dispatch(authFailed(result));
        }else{
            console.log(result);
            dispatch(authGetTotalAttendanceOfStudent(result));
        }

    } catch (error) {
        console.log(error);
        dispatch(authError("Error"));
    }
}

export const getattendanceofparticularmonth = (fields,currentUser) => async(dispatch) => {
    const {id} = currentUser;
    const studentId = id;
    dispatch(authRequest());
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getattendanceofparticularmonth/${studentId}`,{
            method:"Post",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type":"application/json",
                Authorization: `${currentUser?.token}`,
            }
        })
        result = await result.json();
        if(result?.message === "Internal server error"){
            dispatch(authFailed(result));
        }else{
            console.log(result);
            dispatch(authGetAttendanceOfParSubAndMonth(result));
        }
        
    } catch (error) {
        console.log(error);
        dispatch(authError("Error"));
    }
}


//My Test api
export const GetAllSubjectOfStudent = (currentUser) => async(dispatch) => {
    const {roleType,id} = currentUser;
    console.log(currentUser,roleType,id);
    const studentId = id;
    dispatch(authRequest());
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getallsubjectofstudent/${roleType}/${studentId}`,{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                Authorization: `${currentUser?.token}`,
            }
        })
        result = await result.json();
        if(result?.message === "Internal server error"){
            dispatch(authFailed(result));
        }else{
            dispatch(authGetListOfSubject(result));
        }
    } catch (error) {
        console.log(error);
        dispatch(authError("Error"));
    }
}


//Documents api
//-->get all docs of the student
export const getAllDocsOfStudent = (fields) => async(dispatch) => {
    dispatch(authRequest());
    const {roleType,studentId} = fields;
    console.log(roleType,studentId);
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getalldocsofstudent/${roleType}/${studentId}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        
        if(result){
            dispatch(authGetDocsOfStudent(result?.documentData));
        }else{
            dispatch(authFailed(result?.message || "Failed"));
        }

    } catch (error) {
        console.error("Network Error:", error);
        dispatch(authError("Network Error."));
    }

} 

//-->req document api
export const sendDocsRequest = (fields) => async(dispatch) =>{
    dispatch(authRequest());
    console.log(fields);
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/reqdocuments`,{
            method:"post",
            body: JSON.stringify( fields ),
            headers: {
                "Content-Type": "application/json",
            },
        });

        result = await result.json();
        console.log(result);
        if(result?.message){

            dispatch(requestSuccess(result?.message));
        }else{
            dispatch(authFailed(result?.message));
        }

    } catch (error) {
        console.error("Network Error:", error);
        dispatch(authError("Network Error."));
    }

} 