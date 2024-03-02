import React from "react";
import ContentHadder from "../component/ContentHadder";
import "../styles/content.css";
import Card from "../component/Card";
import { Outlet, Route, Routes } from "react-router-dom";
import MedicineDetail from "../component/MedicineDetail";
import PatientCard from "./PatientCard";
import DoctorList from "./DoctorList";
const PatientContent = () => {
  return (
    <div className="content">
      <ContentHadder />
      <Card />
      <div>
        <Routes>
          <Route path="/patientrecodrd" element={<PatientCard />} />
          <Route path="/medicinedetail" element={<MedicineDetail />} />
          <Route path="/doctordetail" element={<DoctorList />} />
          {/* <Route path="/signout" element={<SignOut />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default PatientContent;
