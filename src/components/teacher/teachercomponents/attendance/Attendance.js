import { MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Attendance.css";
import Table from "../../../../common/table/Table";
import { takingStudentsAttendance } from "../../../../store/teacherrelated/TeacherHandle";

const Attendance = () => {
  const { loading } = useSelector((state) => state.teacher);
  const [formData, setFormData] = useState({
    date: "",
    class: "",
    subject: "",
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

  const handleOnChangeForDate = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      date: value,
    }));
  };

  const handleFormSubmitToGetStudents = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can send the data to an API or perform further actions
    
  };

  const handleToTakeAttendance = (e) => {
    e.preventDefault();
    console.log("taking attendance");
    dispatch(takingStudentsAttendance(formData));
  };
  
  const classOptions = ["Class 1", "Jr clg", "UG"];
  const subjectOptions = ["Computer", "Class 2", "Class 3"];

  const studentList = {
    headers: ["Name", "Date", "Present", "Absent"],
    rows: [
      [
        "Binod Joshi",
        formData.date.toLocaleString()
          ? formData.date.toLocaleString()
          : "DD,MM,YYYY",
        "p",
        "a",
      ],
      [
        "Keshav Joshi",
        formData.date.toLocaleString()
          ? formData.date.toLocaleString()
          : "DD,MM,YYYY",
        "p",
        "a",
      ],
      [
        "Binod Joshi",
        formData.date.toLocaleString()
          ? formData.date.toLocaleString()
          : "DD,MM,YYYY",
        "p",
        "a",
      ],
      // Add more rows as needed
    ],
  };
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Attendance </h1>
        </div>
        <form
          className="componentGrid"
          onSubmit={handleFormSubmitToGetStudents}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              style={{ color: "black !important", border: "19px solid black" }}
              value={formData.date}
              onChange={(value) => handleOnChangeForDate(value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid black !important",
                    opacity: "0.3",
                  },
                },
              }}
              slotProps={{
                textField: {
                  variant: "outlined",
                  label: "Select Date",
                  margin: "normal",
                  fullWidth: true,
                  id: "date",
                  name: "date",
                  autoComplete: "date",
                  className: "textField",
                  InputProps: {
                    style: {
                      // border: "2px solid black", // Set your border styles here
                      color: "black", // Set text color
                    },
                  },
                  InputLabelProps: {
                    style: {
                      color: "black", // Set label color
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
          <TextField
            margin="normal"
            fullWidth
            id="class"
            label="Class"
            required
            name="class"
            autoComplete="class"
            select
            className="textField"
            value={formData.class}
            onChange={handleOnChange}
          >
            {classOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            autoComplete="subject"
            select
            className="textField"
            value={formData.subject}
            onChange={handleOnChange}
          >
            {subjectOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </form>
      </div>
      <div className="secondDivOfAttendance">
        <div className="classListDiv">
          <p>Class List</p>
        </div>
        <div
          style={{ overflow: "hidden", borderRadius: "4px 4px", width: "100%" }}
        >
          <Table data={studentList} from={"attedanceDashboardOfTeacher"} />
        </div>
      </div>
      <div>
        <button className="buttonOfAdd" onClick={handleToTakeAttendance}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Attendance;
