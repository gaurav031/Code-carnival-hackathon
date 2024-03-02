import React from "react";
import ProfileHadder from "../component/ProfileHadder";
import "../styles/profile.css";
import { BiBook } from "react-icons/bi";
import data from "../patient.json";
const Profile = () => {
  const patient = data.patients[1];

  return (
    <div className="profile">
      <ProfileHadder />
      <div className="user--profile">
        <div className="user--detail">
          <img src={patient.img} alt="" />

          <h3 className="username">{patient.name}</h3>
          <h3 className="username">{patient.email}</h3>
        </div>
        <div className="user--courses">
          <div className="course">
            <div className="course--detail">
              <div className="course--cover">{<BiBook />}</div>

              <div className="course--name">
                <h5 className="title">{patient.address.street}</h5>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="course--detail">
              <div className="course--cover">{<BiBook />}</div>

              <div className="course--name">
                <h5 className="title">{patient.address.city}</h5>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="course--detail">
              <div className="course--cover">{<BiBook />}</div>

              <div className="course--name">
                <h5 className="title">{patient.address.state}</h5>
              </div>
            </div>
          </div>
          <div className="course">
            <div className="course--detail">
              <div className="course--cover">{<BiBook />}</div>

              <div className="course--name">
                <h5 className="title">{patient.address.zip}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
