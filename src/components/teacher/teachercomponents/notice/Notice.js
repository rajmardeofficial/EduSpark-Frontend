import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectTextField from "../../../../common/inputfields/CustomSelectTextField";
import NoticeOrNote from "../../../../common/noticeandnote/NoticeOrNote";
import { addNotice } from "../../../../store/teacherrelated/TeacherHandle";

const Notice = () => {
    const { loading } = useSelector((state) => state.teacher);
    const [openNotice, setOpenNotice] = useState(false);
    const [fileName, setFileName] = useState("");
    const [formData, setFormData] = useState({
      class: "",
      heading: "",
      noticeData: "",
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
        setOpenNotice(!openNotice);
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
        dispatch(addNotice(formData));
    }  
    const classOptions =["class1","class2"]
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Notice </h1>
        </div>
        {!openNotice ? <form className="componentGrid" onSubmit={handleToAddNotice}>
          <CustomSelectTextField
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleOnChange}
            options={classOptions}
          />
          <div className="noticeDivButtons">
            <button className="buttonOfAdd noticeOrNoteButton" type="submit">
              Add Notice
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
          data ={ "Notice"}
        />
      )}
      </div>
    </>
  );
};

export default Notice;
