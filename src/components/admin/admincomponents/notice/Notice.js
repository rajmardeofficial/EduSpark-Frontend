import { TextField, MenuItem, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./Notice.css";
import { useDispatch, useSelector } from "react-redux";
import { CgSoftwareUpload } from "react-icons/cg";
import {publishNotice} from "../../../../store/adminrelated/AdminHandle"

const Notice = () => {
  const { loading } = useSelector((state) => state.admin);
  const [openNotice, setOpenNotice] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    whom: "",
    heading: "",
    noticeData: "",
    photo: "",
  }); // there are more fileds
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    setOpenNotice(true);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setFileName(e.target.files[0]?.name);
    // setFormData({
    //   ...formData,
    //   photo: , // Update only if a file is selected
    // });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can send the data to an API or perform further actions
    dispatch(publishNotice(formData));
  };
  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Notice</h1>
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
            <button className="buttonOfAdd" type="submit">
              Add Notice
            </button>
            <button className="plusButton" type="submit">
              +
            </button>
          </div>
        </form>
      ) : (
        <div className="publishNoticeDiv">
          <div className="publishNoticeShadow">
            <form
              onSubmit={handleFormSubmit}
              style={{ width: "90%", padding: "50px 13px" }}
            >
              <label
                style={{
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "35px",
                }}
              >
                Enter the Notice Detail
              </label>
              <TextField
                margin="normal"
                fullWidth
                id="heading"
                label="Enter Heading"
                name="heading"
                autoComplete="heading"
                required
                className="textFieldOfPublishNotice"
                value={formData.heading}
                onChange={handleOnChange}
              />
              <textarea
                placeholder="Enter the Notice *"
                id="noticeData"
                name="noticeData"
                autoComplete="noticeData"
                required
                className="textFieldOfPublishNotice textAreaInNotice"
                style={{color:"black"}}
                onChange={handleOnChange}
              />

              <TextField
                margin="normal"
                fullWidth
                label="Upload Photo"
                value={fileName}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <label htmlFor="file-upload">
                        <IconButton
                          color="primary"
                          aria-label="upload photo"
                          component="span"
                        >
                          <CgSoftwareUpload />
                        </IconButton>
                      </label>
                      <input
                        type="file"
                        id="file-upload"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </InputAdornment>
                  ),
                }}
                className="textField"
              />
              <button
                className="buttonOfAdd"
                type="submit"
                style={{ width: "100%", margin: "0" }}
              >
                Publish Notice
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
