import { Routes, Route } from "react-router-dom";
import Nevbar from "./Nevbar";
import Login from "./Login";
import Home from "./Home";
import DoctorLogin from "./doctor/DoctorLogin";
import PatientLogin from "./patient/PatientLogin";
import PatiientSignup from "./patient/PatiientSignup";
import DoctorSignup from "./doctor/DoctorSignup";
function LoginSignup() {
  return (
    <div>
      <Nevbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}>
          <Route path="doctor" element={<DoctorLogin />} />
          <Route path="doctorsignup" element={<DoctorSignup />} />
          <Route path="patient" element={<PatientLogin />} />
          <Route path="patientsignup" element={<PatiientSignup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default LoginSignup;
