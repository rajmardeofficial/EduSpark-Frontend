import { authRequest,authError, requestSuccess, authFailed, authGetDocsOfStudent, } from "./StudentSlice";

//Home api


//Attendace api


//My Test api


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