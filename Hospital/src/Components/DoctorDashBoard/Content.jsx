// Content.jsx
import React from "react";
import ContentHadder from "./ContentHadder";
import "../styles/content.css";
import Card from "./Card";
import { Routes, Route } from "react-router-dom";
import TeacherList from "./TeacherList";
import NewPatientAdd from "./NewPatientAdd";
import MedicineDetail from "./MedicineDetail";

const Content = () => {
  return (
    <div className="content">
      <ContentHadder />
      <Card />
      <Routes>
        <Route path="patientrecodrd" element={<TeacherList />} />
        <Route path="addnewpatient" element={<NewPatientAdd />} />
        <Route path="medicinedetail" element={<MedicineDetail />} />
      </Routes>
    </div>
  );
};

export default Content;
