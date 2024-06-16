import { authRequest,authError, requestSuccess, authFailed, authGetListOfSubject, authGetTotalAttendanceOfStudent, authGetAttendanceOfParSubAndMonth, authGetDocsOfStudent, authGetListOfNotices, } from "./StudentSlice";

//Home api


//Attendace api
export const getAllAttendanceOfStudent = (fields,currentUser) => async(dispatch) => {

    dispatch(authRequest());
    console.log(currentUser?.token,fields);
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getattendance`, {
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
        }else if(result?.message === "Unauthorized: Invalid token"){
            console.log(result);
        }else {
            console.log(result);
            dispatch(authGetTotalAttendanceOfStudent(result));
        }

    } catch (error) {
        console.log(error);
        dispatch(authError("Error"));
    }
}

export const getattendanceofparticularmonth = (fields,currentUser) => async(dispatch) => {
    dispatch(authRequest());
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getattendanceofparticularmonth`,{
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
    const {roleType} = currentUser;
    dispatch(authRequest());
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getallsubjectofstudent/${roleType}`,{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                Authorization: `${currentUser?.token}`,
            }
        })
        result = await result.json();

        if(result?.message === "Internal server error"){
            dispatch(authFailed(result));
        }else if(result?.message === "Unauthorized: Invalid token"){
            console.log(result);
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
export const getAllDocsOfStudent = (fields,currentUser) => async(dispatch) => {
    dispatch(authRequest());
    const {roleType} = fields;

    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getalldocsofstudent/${roleType}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${currentUser?.token}`
            },
        });
        result = await result.json();
        console.log(result);
        
        if(result){
            dispatch(authGetDocsOfStudent(result?.documentData));
        }
        else{
            dispatch(authFailed(result?.message || "Failed"));
        }

    } catch (error) {
        console.error("Network Error:", error);
        dispatch(authError("Network Error."));
    }

} 

//-->req document api
export const sendDocsRequest = (fields,currentUser) => async(dispatch) =>{
    dispatch(authRequest());
    console.log(fields);
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/reqdocuments`,{
            method:"post",
            body: JSON.stringify( fields ),
            headers: {
                "Content-Type": "application/json",
                Authorization: `${currentUser?.token}`
            },
        });

        result = await result.json();
        console.log(result);
        if(result?.message && result?.message !== "Internal server error"){

            dispatch(requestSuccess(result?.message));
        }else{
            dispatch(authFailed(result?.message));
        }

    } catch (error) {
        console.error("Network Error:", error);
        dispatch(authError("Network Error."));
    }

} 

// request notice

export const getNotice = (fields, currentUser) =>async(dispatch) => {
    const {institute,selectedAuthority,roleType} = fields;
    try {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL_BACKEND}/auth/student/getnotices/${institute}/${selectedAuthority}/${roleType}`,{
            method:"get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${currentUser?.token}`
            },
        });
        result = await result.json();
        if(result?.message === "Internal server error"){
            dispatch(authFailed(result));
        }else if(result?.message === "Unauthorized: Invalid token"){
            console.log(result);
        }else{
            dispatch(authGetListOfNotices(result));
        }
    } catch (error) {
        console.error("Network Error:", error);
        dispatch(authError("Network Error."));
    }
}