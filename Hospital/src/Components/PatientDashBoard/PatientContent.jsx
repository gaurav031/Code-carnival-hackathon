import React from "react";
import ContentHadder from "../DoctorDashBoard/ContentHadder";
import "../styles/content.css";
import Card from "./Card";
import { Outlet, Route, Routes } from "react-router-dom";
import MedicineDetail from "../DoctorDashBoard/MedicineDetail";
import PatientCard from "./PatientCard";
import DoctorList from "./DoctorList";
import DoctorDetail from "./DoctorDetail";
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
          <Route path="/userdata/:id" element={<DoctorDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default PatientContent;
