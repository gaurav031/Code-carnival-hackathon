import React from "react";
import "./styles/medicineDetailPage.css";

import medicineData from "../medicine.json";

const MedicineDetail = () => {
  return (
    <>
      {medicineData.map((medicine) => (
        <div className="medicine-detail-container" key={medicine.id}>
          <h2>Medicine Details</h2>
          <div>
            <strong>Name:</strong> {medicine.name}
          </div>
          <div>
            <strong>Type:</strong> {medicine.type}
          </div>
          <div>
            <strong>Dosage:</strong> {medicine.dosage}
          </div>
          <div>
            <strong>Manufacturer:</strong> {medicine.manufacturer}
          </div>
          <div>
            <strong>Price:</strong> ${medicine.price}
          </div>
        </div>
      ))}
    </>
  );
};

export default MedicineDetail;
