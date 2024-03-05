import {configureStore} from "@reduxjs/toolkit";
import {formReducer} from "./formrelated/FormSlice";
import {adminReducer} from "./adminrelated/AdminSlice";
// import {teacherReducer} from "./teacherrelated/TeacherSlice"
// import {studentReducer} from "./studentrelated/StudentSlice"

const store = configureStore({
    reducer:{
        role:formReducer,
        admin:adminReducer,
        // teacher:teacherReducer,
        // student:studentReducer,
    }
})
export default store;


