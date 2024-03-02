// Import necessary modules and components
import React from "react";
import { useState } from "react";
import * as Components from "./Patient.js";
import { NavLink, Link ,useNavigate} from "react-router-dom";

// Main component function
export default function Patient() {
  // State variables
  const history = useNavigate();
  const [signIn, toggle] = React.useState(true);
  const [id, setId] = useState("");
  const [doctorname, setDoctorName] = useState("");
  const [hospitalname, setHospitalName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    if (!validateAadhar()) {
      newErrors.aadhar = "Invalid Aadhar card format";
    }

    if (!validatePhoneNumber()) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (!validatePassword()) {
      newErrors.password = "Invalid password";
    }

    if (password !== conpassword) {
      newErrors.conpassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  
  const handleLogin = () => {
    // Check if email and password are the same (for demonstration purposes)
    if (email == "gaurav@gmail.com" && password == "G@u12345") {
      // Redirect to the next page
      history.push("/doc");
    } else {
      setError("Email and password do not match.");
    }
  };
  const handleFormSubmit = () => {
    history.push("/doc");
  };
  
  return (
    // Creating Account
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleFormSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Patient Id"
            onChange={(e) => setId(e.target.value)}
            required
          />

          <Components.Input
            type="text"
            placeholder="Patient Name"
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />

          <Components.Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Components.Input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}

          <Components.Input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            style={{ marginBottom: "10px" }}
            onChange={(e) => setAadhar(e.target.value)}
          />
          {errors.aadhar && <span>{errors.aadhar}</span>}

          <Components.Input
            type="password"
            placeholder="Password"
            value={password}
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}

          <Components.Input
            type="password"
            placeholder="Confirm Password"
            value={conpassword}
            style={{ marginBottom: "10px" }}
            onChange={(e) => setConpassword(e.target.value)}
          />
          {errors.conpassword && <span>{errors.conpassword}</span>}

          <Components.Button type="submit"> Register</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Patient Login</Components.Title>
          <Components.Input
            type="email"
            placeholder="Patient Email"
            style={{ marginBottom: "10px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
<Link to={'/pat'} >
          <Components.Button onClick={handleLogin}>Sign In</Components.Button>
          </Link>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello Dear!</Components.Title>
            <Components.Paragraph>
              Please Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}
