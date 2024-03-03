// index.jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
<<<<<<< HEAD
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Conatct.jsx";
=======
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"
>>>>>>> e5fe5bccf9523ac3588aac796f0fd92eab37f6f0
import Doctor from "./Components/DoctorSigin/Doctor.jsx";
import DocRender from "./DocRender/DocRender.jsx";
import Patient from "./Components/PatientceSigin/Patient.jsx";
import TeacherList from "./Components/DoctorDashBoard/TeacherList.jsx";
import NewPatientAdd from "./Components/DoctorDashBoard/NewPatientAdd.jsx";
import MedicineDetail from "./Components/DoctorDashBoard/MedicineDetail.jsx";
import PatientRender from "./PatRender/PatientRender.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<Home />} />
        <Route path="doctor" element={<Doctor />} />
        <Route path="patient" element={<Patient />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="doc" element={<DocRender />} />
        <Route path="patientrecodrd" element={<TeacherList />} />
        <Route path="addnewpatient" element={<NewPatientAdd />} />
        <Route path="medicinedetail" element={<MedicineDetail />} />
        <Route path="pat/*" element={<PatientRender />} />
      </Route>
    </Routes>
  </Router>
);
