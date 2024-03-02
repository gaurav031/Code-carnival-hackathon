import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import patientData from "../../patient.json";
const patient = patientData.patients[0];
const Card = () => {
  const handleclick = (item) => {
    window.open(`https://en.wikipedia.org/wiki/${item}`, "_blank");
  };
  return (
    <div className="card--container">
      {patient.medical_history.map((item, index) => (
        <div
          onClick={() => handleclick(item.condition)}
          className="card"
          key={index}
        >
          <div className="card--cover">{<FaUserDoctor />}</div>
          <div className="card--title">{item.condition}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
