import React from "react";
import data from "../data.json";
import "../styles/doctordetail.css";
const DoctorDetail = () => {
  const doctor = data[1];
  const containerStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
  };
  return (
    <div className="card mb-3 card-div">
      <div className="row g-0">
        <div className="col-md-4 m-4 p-4">
          <img src={doctor.img} alt={doctor.name} className="card-img" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">
              <u>{doctor.name}</u>
            </h5>
            <p className="card-text">
              <strong>ID:</strong> {doctor.id} <br />
              <strong>Qualification:</strong>{" "}
              {doctor.qualification.map((data) => (
                <li>{data}</li>
              ))}{" "}
              <br />
              <strong>Specialization:</strong>{" "}
              {doctor.specialization.map((data) => (
                <li>{data}</li>
              ))}{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
