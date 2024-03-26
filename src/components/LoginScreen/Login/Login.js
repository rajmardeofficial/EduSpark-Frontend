import React, { useState } from 'react';
import "./Login.css"
import { Form, FormField, Button, Dropdown, Menu, Header, Divider } from 'semantic-ui-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import { Link } from 'react-router-dom';

const Login=()=> {
  const [showPassword, setShowPassword] = useState(false);
  const options = [
    { key: 1, text: 'Admin', value: 1 },
    { key: 2, text: 'Teacher', value: 2 },
    { key: 3, text: 'Student', value: 3 },
  ];

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App" >
      {/* Left Side (Orange Background with Image) */}
      <div className='leftcontainer'>
        <img src="../learningbro-1@2x.png" alt="Centered" style={{ maxWidth: '60%', maxHeight: '60%' ,flexShrink:"7",display:'flex'}} />
        <Divider horizontal style={{ width: '80%', background: 'white', margin: '20px 0', padding: "1px" }} />
        <div style={{height:"90px",width:"553px",flexShrink:"1",display:"flex"}}>
        <p style={{ color: 'white', textAlign: 'center',fontWeight:"bolder", fontSize:"25px" }}>"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young"</p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',gap:"3%",marginRight:"2%"}}>
        <Form size="big" className='Form'>
          <Header size="huge" className='Logintext'>Login</Header>
          <Menu compact style={{ background: "#E5E5E5", marginBottom: '20px' }}>
            <Dropdown text='Login as' options={options} simple item />
          </Menu>

          <FormField style={{ marginBottom: '20px' }}>
            <input placeholder='Enter your Mail...' style={{ background: "#E5E5E5" }} />
          </FormField>
          <FormField style={{ marginBottom: '20px', position: 'relative' }}>
            <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' style={{ background: "#E5E5E5", paddingRight: '30px' }} />
            <span onClick={toggleShowPassword} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </FormField>
       <Link to="/Otp" >  <FormField style={{ textAlign: 'right', marginBottom: '20px', fontStyle: 'italic' }}>Forgot Password?</FormField></Link>
          <div style={{ textAlign: 'center' }}>
          <Button type='submit' Class='button-login'>Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
