// PublishNoticeForm.js
import React from "react";
import { TextField, IconButton, MenuItem, InputAdornment } from "@mui/material";
import { CgSoftwareUpload } from "react-icons/cg";

const NoticeOrNote = ({ formData, fileName, handleOnChange, handleFileChange, handleFormSubmit,data }) => {
    console.log(data);
  return (
    <div className="publishNoticeDiv">
      <div className="publishNoticeShadow">
        <form onSubmit={handleFormSubmit} style={{ width: "90%", padding: "50px 13px" }}>
          <label style={{ fontWeight: 600, fontSize: "25px", lineHeight: "35px" }}>Enter the {data} Details</label>
          <TextField
            margin="normal"
            fullWidth
            id={data === "Notice"?"heading":"title"}
            label={data === "Notice"?"Enter Heading":"Enter Title"}
            name={data === "Notice"?"heading":"title"}
            autoComplete={data === "Notice"?"heading":"title"}
            required
            className="textFieldOfPublishNotice"
            value={data === "Notice"?`${formData.heading}`:`${formData.title}`}
            onChange={handleOnChange}
          />
          <textarea
            placeholder={data === "Notice"?"Enter the Notice*":"Enter the Description (Optional)"}
            id={data === "Notice"?"noticeData":"noteData"}
            name={data === "Notice"?"noticeData":"noteData"}
            autoComplete={data === "Notice"?"noticeData":"noteData"}
            required={data === "Notice"?true:false}
            className="textFieldOfPublishNotice textAreaInNotice"
            style={{ color: "black" }}
            value={data === "Notice"?`${formData.noticeData}`:`${formData.noteData}`}
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
                    <IconButton color="primary" aria-label="upload photo" component="span">
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
            {data === "Notice"?"Publish Notice": "Send Notice"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeOrNote;
