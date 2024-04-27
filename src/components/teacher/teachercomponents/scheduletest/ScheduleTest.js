import { InputAdornment, MenuItem, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTest } from "../../../../store/teacherrelated/TeacherHandle";
import { CgSoftwareUpload } from "react-icons/cg";


const ScheduleTest = () => {
    const {loading} = useSelector((state) => state.teacher);
    const [nameOfQuestionPaper, setNameOfQuestionPaper] = useState("");
    const [nameOfAnswerPaper, setNameOfAnswerPaper] = useState(""); 
    const [formData, setFormData] = useState({
      class: "",
      subject: "",
      testName: "",
      testTotalMark: "",
      questionPaper: "",
      answerKey: "",
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

    const handleFileChange = (e,data) => {
      e.preventDefault();

      console.log(data);
      if (data === "question") {
        const selectedFile = e.target.files[0];
        setNameOfQuestionPaper(e.target.files[0]?.name)
        // setFormData({
      //   ...formData,
      //   questionPaper: , // Update only if a file is selected
      // });
      }else if(data === "answer"){
        const selectedFile = e.target.files[0];
        setNameOfAnswerPaper(e.target.files[0]?.name);
        // setFormData({
      //   ...formData,
      //   answerKey: , // Update only if a file is selected
      // });
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Form Data:", formData);
      // You can send the data to an API or perform further actions
      dispatch(addTest(formData))
    };
  return (
    <div className="studentComponent">
      <div className="navHeaderForTeaAndStd">
        <h1>Schedule Test</h1>
      </div>
      <form className="componentGrid" onSubmit={handleFormSubmit}>
        <TextField
          margin="normal"
          fullWidth
          id="class"
          label="Class"
          name="class"
          autoComplete="class"
          required
          select
          className="textField"
          value={formData.class}
          onChange={handleOnChange}
        >
          <MenuItem value="class1">Class1</MenuItem>
          <MenuItem value="class2">A</MenuItem>
          <MenuItem value="class3">B</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="submit"
          label="Subject"
          name="subject"
          autoComplete="subject"
          className="textField"
          select
          value={formData.subject}
          onChange={handleOnChange}
        >
          <MenuItem value="class1">MERN 1</MenuItem>
          <MenuItem value="class2">Class 2</MenuItem>
          <MenuItem value="class3">Class 3</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="testName"
          label="Test Name"
          name="testName"
          autoComplete="testName"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="testTotalMark"
          label="Test Total Marks"
          name="testTotalMark"
          autoComplete="testTotalMark"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Upload Question Paper PDF"
          value={nameOfQuestionPaper}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <label htmlFor="file-upload">
                  <IconButton
                    color="primary"
                    aria-label="Upload Question Paper PDF"
                    component="span"
                  >
                    <CgSoftwareUpload />
                  </IconButton>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  style={{ display: "none" }}
                  onChange={(e) =>handleFileChange(e,"question")}
                />
              </InputAdornment>
            ),
          }}
          className="textField"
        />
        <TextField
          margin="normal"
          fullWidth
          label="Upload Answer Key"
          value={nameOfAnswerPaper}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <label htmlFor="file-upload1">
                  <IconButton
                    color="primary"
                    aria-label="Upload Answer Key"
                    component="span"
                  >
                    <CgSoftwareUpload />
                  </IconButton>
                </label>
                <input
                  type="file"
                  id="file-upload1"
                  style={{ display: "none" }}
                  onChange={(e) =>handleFileChange(e,"answer")}
                />
              </InputAdornment>
            ),
          }}
          className="textField"
        />

        <button className="buttonOfAdd" type="submit">
          Add Test
        </button>
      </form>
    </div>
  );
};

export default ScheduleTest;
