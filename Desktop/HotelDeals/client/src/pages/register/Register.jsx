import { Card, Form, Input, Button } from "antd";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const navigate=useNavigate()

  const handleSubmit = (values) => {
    console.log(values);
    axios.post("/auth/register", values)
      .then((res) => {
        console.log(res)
        navigate("/login")
        alert("User Register Successfully")
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const cardStyle = {
    maxWidth: "500px",
    margin: "auto",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    backgroundColor: "#3366FF",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%"
  };

  return (
    <div>
      <ToastContainer />
      <Card title="Registration Form" style={cardStyle}>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username" }
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" }
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" }
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[
              { required: true, message: "Please enter your country" }
            ]}
          >
            <Input placeholder="Enter your country" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[
              { required: true, message: "Please enter your city" }
            ]}
          >
            <Input placeholder="Enter your city" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" }
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={buttonStyle}>
            Submit
          </Button>
          <Button onClick={()=>navigate("/")} style={{...buttonStyle, marginTop: "10px"}}>
            Back to Home Page
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default RegistrationForm;






// change in the ui of register 
// fkjv jf

//klng ;rkjg'wr  e;kh guadshgv.ksak.jbw,djv