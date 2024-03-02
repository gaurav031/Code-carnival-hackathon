import React from "react";
import "../styles/medicineDetailPage.css";

import medicineData from "../medicine.json";

const MedicineDetail = () => {
  return (
    <>
      <div className="box">
        <h2>Medicine Details:</h2>
        {medicineData.map((medicine) => (
          <div className="main">
            <div className="medicine-detail-container" key={medicine.id}>
              <div className="medicine-name">
                <h3>{medicine.name}</h3>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default MedicineDetail;
