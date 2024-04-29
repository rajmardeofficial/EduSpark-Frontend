import { InputAdornment, MenuItem, TextField, IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { addLiberian } from "../../../../store/adminrelated/AdminHandle";
import RoleType from "../../../../common/roleType/RoleType";

const AddTeacher = () => {
  const {loading} = useSelector((state) => state.admin);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    middleName:"",
    lastName:"",
    phoneNum: "",
    email: "",
    qualification: "",
    photo: "",
    birth: "",
    pAddress: "",
    blood: "",
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

  const handleOnChangeForDate = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      birth: value,
    }));
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setFileName(e.target.files[0]?.name)
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
    dispatch(addLiberian(formData))
    
  };


  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Add Liberian</h1>
      </div>
      <div>
      <RoleType roleType={"All Three"} />
      </div>
      <form className="componentGrid" onSubmit={handleFormSubmit}>
      <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name Of Liberian"
          name="firstName"
          autoComplete="firstName"
          autoFocus
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="middleName"
          label="Middle Name Of Liberian"
          name="middleName"
          autoComplete="middleName"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name Of Liberian"
          name="lastName"
          autoComplete="lastName"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNum"
          label="Phone Number"
          name="phoneNum"
          autoComplete="phoneNum"
          type="Number"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          type="email"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="qualification"
          label="Qualification"
          name="qualification"
          autoComplete="qualification"
          className="textField"
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
                    <PhotoCameraIcon />
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker style={{color:"black !important",border:"19px solid black"}}
            value={formData.birth}
            onChange={(value) => handleOnChangeForDate(value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: '1px solid black !important',
                  opacity:"0.3"
                },
              },
            }}
            slotProps={{
              textField: {
                variant: "outlined",
                label: "Date of Birth",
                margin: "normal",
                fullWidth: true,
                id: "birth",
                label: "Date of Birth",
                name: "birth",
                autoComplete: "birth",
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
          required
          fullWidth
          id="pAddress"
          label="Permanent Address"
          name="pAddress"
          autoComplete="pAddress"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="blood"
          label="Blood Group (Opitonal)"
          name="blood"
          autoComplete="blood"
          select
          className="textField"
          value={formData.blood}
          onChange={handleOnChange}
        >
          <MenuItem value="class1">O+</MenuItem>
          <MenuItem value="class2">A</MenuItem>
          <MenuItem value="class3">B</MenuItem>
        </TextField>

        <button className="buttonOfAdd" type="submit">
          Add Liberian
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
