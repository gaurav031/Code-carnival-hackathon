import "../styles/newPatientAdd.css";
import React, { useState } from "react";
import patientdata from "../patient.json";
const NewPatientAdd = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [condition, setCondition] = useState("");
  const [diagnosisDate, setDiagnosisDate] = useState("");
  const [treatments, setTreatments] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [reason, setReason] = useState("");
  const [medical_history, setMedical_history] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [data, setData] = useState(patientdata);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log("Form submitted:", {
      name,
      gender,
      street,
      city,
      state,
      zip,
      condition,
      diagnosisDate,
      treatments,
      doctorId,
      appointmentDate,
      reason,
    });

    const id = Date.now();
    const img = `personImg/${patientdata.patients.length + 1}.jpeg`;

    setData([
      ...data,
      {
        id,
        img,
        name,
        gender,
        street,
        city,
        state,
        zip,
        condition,
        diagnosisDate,
        treatments,
        doctorId,
        appointmentDate,
        reason,
      },
    ]);

    console.log(patientdata.patients);

    alert("Form submitted successfully!");
  };

  const handleonclickaddmedicalhestory = (
    condition,
    diagnosisDate,
    treatments
  ) => {
    const data = {
      condition,
      diagnosisDate,
      treatments,
    };

    setMedical_history([...medical_history, data]);

    console.log(medical_history);
  };

  const handleonclickAppointment = (doctorId, appointmentDate, reason) => {
    const data = {
      doctorId,
      appointmentDate,
      reason,
    };
    setAppointments([...appointments, data]);
    console.log(appointments);
  };

  return (
    <div className="box">
      <h2>Patient Information Form</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <fieldset>
          <legend>Address:</legend>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            onChange={(e) => setState(e.target.value)}
          />
          <label htmlFor="zip">Zip:</label>
          <input
            type="text"
            id="zip"
            onChange={(e) => setZip(e.target.value)}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Medical History:</legend>
          <label htmlFor="condition">Condition:</label>
          <input
            type="text"
            id="condition"
            onChange={(e) => setCondition(e.target.value)}
          />
          <label htmlFor="diagnosisDate">Diagnosis Date:</label>
          <input
            type="date"
            id="diagnosisDate"
            onChange={(e) => setDiagnosisDate(e.target.value)}
          />
          <label htmlFor="treatments">Treatments:</label>
          <input
            type="text"
            id="treatments"
            onChange={(e) => setTreatments(e.target.value)}
          />
          <button
            type="button"
            onClick={() =>
              handleonclickaddmedicalhestory(
                condition,
                diagnosisDate,
                treatments
              )
            }
          >
            Add Medical History
          </button>
        </fieldset>

        <fieldset>
          <legend>Appointments:</legend>
          <label htmlFor="doctorId">Doctor ID:</label>
          <input
            type="text"
            id="doctorId"
            onChange={(e) => setDoctorId(e.target.value)}
          />
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            onChange={(e) => setReason(e.target.value)}
          />
          <button
            type="button"
            onClick={() =>
              handleonclickAppointment(doctorId, appointmentDate, reason)
            }
          >
            Add Appointment
          </button>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewPatientAdd;
