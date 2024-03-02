import React from "react";
import ProfileHadder from "./ProfileHadder";
import "../styles/profile.css";
import { BiBook } from "react-icons/bi";
import data from "../../data.json"; 
const Profile = () => {
  const doctor = data[0];

  return (
    <div className="profile">
      <ProfileHadder />
      <div className="user--profile">
        <div className="user--detail">
          <img src={doctor.img} alt="" />

          <h3 className="username">{doctor.name}</h3>

          <span className="profession">Doctor</span>
        </div>

        <div className="user--courses">
          {doctor.qualification.map((qualification) => (
            <div className="course">
              <div className="course--detail">
                <div className="course--cover">{<BiBook />}</div>

                <div className="course--name">
                  <h5 className="title">{qualification}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
