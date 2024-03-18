// Notice.js
import React, { useState } from "react";
import { TextField, MenuItem,} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Notice.css";
import { publishNotice } from "../../../../store/adminrelated/AdminHandle";
import NoticeOrNote from "../../../../common/noticeandnote/NoticeOrNote";
import RoleType from "../../../../common/roleType/RoleType";

const Notice = () => {
  const { loading } = useSelector((state) => state.admin);
  const [openNotice, setOpenNotice] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    whom: "",
    heading: "",
    noticeData: "",
    photo: "",
  });
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    setOpenNotice(true);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setFileName(e.target.files[0]?.name);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(publishNotice(formData));
  };

  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Notice</h1>
      </div>
      <div>
      <RoleType roleType={"All Three"} />
      </div>
      {!openNotice ? (
        <form onSubmit={handleAddNotice} className="componentGrid">
          <TextField
            margin="normal"
            fullWidth
            id="whom"
            label="To Whom"
            name="whom"
            autoComplete="whom"
            required
            select
            className="textField"
            value={formData.whom}
            onChange={handleOnChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </TextField>
          <div className="noticeDivButtons">
            <button className="buttonOfAdd noticeOrNoteButton" type="submit">
              Add Notice
            </button>
            <button className="plusButton" type="submit">
              +
            </button>
          </div>
        </form>
      ) : (
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
  );
};

export default Notice;
