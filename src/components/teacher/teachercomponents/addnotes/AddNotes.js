import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectTextField from "../../../../common/inputfields/CustomSelectTextField";
import NoticeOrNote from "../../../../common/noticeandnote/NoticeOrNote";
import { addNotes } from "../../../../store/teacherrelated/TeacherHandle";

const Notice = () => {
    const { loading } = useSelector((state) => state.teacher);
    const [openNotes, setOpenNotes] = useState(false);
    const [fileName, setFileName] = useState("");
    const [formData, setFormData] = useState({
      class: "",
      subject:"",
      title: "",
      noteData: "",
      photo: "",
    });
    const dispatch = useDispatch();

    const handleOnChange =(e) =>{
        const {name,value} = e.target;
        console.log(name,value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    } 

    const handleToAddNotice = (e) => {
        e.preventDefault();
        setOpenNotes(!openNotes);
        console.log(formData);
    }

    const handleFileChange = (e) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        setFileName(e.target.files[0]?.name);
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addNotes(formData));
    }  
    const classOptions =["class1","class2"]
    const subjectOptions = ["English","Math"]
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Add Notes </h1>
        </div>
        {!openNotes ? <form className="componentGrid" onSubmit={handleToAddNotice}>
          <CustomSelectTextField
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleOnChange}
            options={classOptions}
          />
          <CustomSelectTextField
            label="Select Subject"
            name="subject"
            value={formData.subject}
            onChange={handleOnChange}
            options={subjectOptions}
          />
          <div className="noticeDivButtons">
            <button className="buttonOfAdd noticeOrNoteButton"  type="submit">
              Add Notes
            </button>
            <button className="plusButton" type="submit">
              +
            </button>
          </div>
        </form>:(
        <NoticeOrNote
          formData={formData}
          fileName={fileName}
          handleOnChange={handleOnChange}
          handleFileChange={handleFileChange}
          handleFormSubmit={handleFormSubmit}
          data ={"Note"}
        />
      )}
      </div>
    </>
  );
};

export default Notice;
