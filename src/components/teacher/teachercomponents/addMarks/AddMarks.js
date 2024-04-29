import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomSelectTextField from "../../../../common/inputfields/CustomSelectTextField";
import Table from "../../../../common/table/Table";
import { addMarks } from "../../../../store/teacherrelated/TeacherHandle";

const AddMarks = () => {
  const { loading } = useSelector((state) => state.teacher);
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    testName: "",
  });
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

  const handleToTakeMarks = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can send the data to an API or perform further actions
    // dispatch(AddMarks(formData));
    dispatch(addMarks(formData))
  };

  const classOptions = ["class1", "class2"];
  const subjectOptions = ["subject1", "subject2"];
  const testOptions = ["saturdayTest", "mondayTest"];

  const studentList = {
    headers: ["Name", "Subject", "Marks", "Pass", "Fail"],
    rows: [
      ["Binod Joshi", "Math", "23", "p", "f"],
      ["Keshav Joshi", "English", "23", "p", "f"],
      ["Binod Joshi", "Math", "23", "p", "f"],
      // Add more rows as needed
    ],
  };
  return (
    <>
      <div className="studentComponent">
        <div className="navHeaderForTeaAndStd">
          <h1>Add Marks </h1>
        </div>
        <form
          className="componentGrid"
          // onSubmit={handleFormSubmitToGetStudents}
        >
          <CustomSelectTextField
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleOnChange}
            options={classOptions}
          />
          <CustomSelectTextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleOnChange}
            options={subjectOptions}
          />
          <CustomSelectTextField
            label="Test Name"
            name="testName"
            value={formData.testName}
            onChange={handleOnChange}
            options={testOptions}
          />
        </form>
      </div>
      <div className="secondDivOfAttendance">
        <div className="classListDiv">
          <p>Class List</p>
        </div>
        <div
          style={{ overflow: "hidden", borderRadius: "4px 4px", width: "100%" }}
        >
          <Table data={studentList} from={"addMarksDashboardOfTeacher"} />
        </div>
      </div>
      <div>
        <button className="buttonOfAdd" onClick={handleToTakeMarks}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddMarks;
