import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: ""
  });
  const navigate=useNavigate()
  const notify = () => toast("user registered successfully");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("/auth/register",formData).then((res)=>{
      console.log(res)

      navigate("/login")
    }).catch((err)=>{
       console.log(err)
    })
  };

  const formStyle = {
    backgroundColor: "#F0F8FF",
    color: "#333",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "auto"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    border: "2px solid #3366FF",
    borderRadius: "4px",
    fontSize: "16px"
  };

  const buttonStyle = {
    backgroundColor: "#3366FF",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <div>
      <ToastContainer/>
  

    <form style={formStyle} onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" style={inputStyle} value={formData.username} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" style={inputStyle} value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" style={inputStyle} value={formData.password} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" name="country" style={inputStyle} value={formData.country} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        City:
        <input type="text" name="city" style={inputStyle} value={formData.city} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" style={inputStyle} value={formData.phone} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Submit</button>
      <button onClick={()=>navigate("/")} style={buttonStyle}>Back to Home Page</button>
    </form>
    </div>
  );
}

export default RegistrationForm;
