import React from "react";
import data from "../patient.json";

const PatientCard = () => {
  const patient = data.patients[1];
  return (
    <div className="container m-5 p-5 bg-dark">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="card">
              <img
                src={patient.img}
                alt={patient.name}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>ID:</strong> {patient.id} <br />
                  <strong>Gender:</strong> {patient.gender} <br />
                  <strong>Age:</strong> {patient.age} <br />
                  <strong>Contact:</strong> {patient.contact} <br />
                  <strong>Email:</strong> {patient.email} <br />
                  <strong>Address:</strong>{" "}
                  {`${patient.address.street}, ${patient.address.city}, ${patient.address.state} ${patient.address.zip}`}{" "}
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Medical History</h5>
              <p className="card-text">
                <ul>
                  {patient.medical_history.map((history, index) => (
                    <li key={index}>
                      <strong>Condition:</strong> {history.condition} <br />
                      <strong>Diagnosis Date:</strong> {history.diagnosis_date}{" "}
                      <br />
                      <strong>Treatments:</strong>{" "}
                      {history.treatments.map((data) => (
                        <li>{data}</li>
                      ))}
                    </li>
                  ))}
                </ul>
              </p>
              <h5 className="card-title">Appoinments</h5>
              <p className="card-text">
                <ul>
                  {patient.appointments.map((appointment, index) => (
                    <li key={index}>
                      <strong>Doctor ID:</strong> {appointment.doctor_id} <br />
                      <strong>Appointment Date:</strong>{" "}
                      {appointment.appointment_date} <br />
                      <strong>Reason:</strong> {appointment.reason}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
