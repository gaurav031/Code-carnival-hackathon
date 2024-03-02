import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import doctors from "../../data.json";
const doctor = doctors[0];
const Card = () => {
  const handleclick = (item) => {
    window.open(`https://en.wikipedia.org/wiki/${item}`, "_blank");
  };
  return (
    <div className="card--container">
      {doctor.specialization.map((item, index) => (
        <div onClick={() => handleclick(item)} className="card" key={index}>
          <div className="card--cover">{<FaUserDoctor />}</div>
          <div className="card--title">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
