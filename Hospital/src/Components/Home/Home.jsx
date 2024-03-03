import React from "react";
import "./Styles.css"; // Make sure to import your CSS file
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      {/* LANDING PAGE */}
      <div className="landing">
        <div className="home-container">
          <div className="background-image">
            <div className="floating-card doctor-card">
              <h2>Sign in for Doctor</h2>
              <NavLink to="/doctor">
                <button>Sign In</button>
              </NavLink>
            </div>
            <div className="floating-card patient-card">
              <h2>Sign in for Patient</h2>
              <button>Sign In</button>
            </div>
          </div>
        </div>

        <div
          className="landingImage"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img src="./Images/bg.png" alt="" />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about">
        <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
          <h1>
            Why is it important that <br />{" "}
            <span style={{ color: "#2f8be0", fontSize: "3vw" }}>
              To Apply Health-Card?
            </span>{" "}
          </h1>
          <img src=".\Images\DocWom.png" alt="" />
        </div>
        <div
          className="aboutList"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ol>
            <li>
              <span>01</span>
              <p>
                "Your gateway to comprehensive healthcare access - the health
                card ensures you're covered when it matters most."
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                "With our health card, you're never far from quality care.
                Access medical records, schedule appointments, and more, all in
                one secure place."
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
                "Stay prepared for life's uncertainties with our health card,
                your personalized tool for managing your well-being on-the-go."
              </p>
            </li>
          </ol>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="infoSection">
        <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
          <h1 style={{ color: "#e0501b" }}>Health Card Benefits: </h1>
        </div>
        <div className="infoCards">
          <div className="card one" data-aos="fade-up" data-aos-duration="1000">
            <img
              src="./Images/movie.png"
              className="cardoneImg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1100"
            />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Doctor Detail</h2>
              <p>
                All Your Doctor Information is save here...
                 "Meet Our Expert
                Physicians: Your Trusted Team for Exceptional Care"
              </p>
              <Link to="#">
                <div className="cardBtn">
                  <img src="./Images/next.png" alt="" className="cardIcon" />
                </div>
              </Link>
            </div>
          </div>
          <div className="card two" data-aos="fade-up" data-aos-duration="1300">
            <img
              src="./Images/learn.png"
              className="cardtwoImg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1200"
            />
            <div className="cardbgtwo"></div>
            <div className="cardContent">
              <h2>Get Your Heath Detail</h2>
              <p>
                "Securely Share Your Information: Provide Your Details for
                Personalized Care and Medical Assistance"
              </p>
              <a href="#">
                <div className="cardBtn">
                  <img src="Images/next.png" alt="" className="cardIcon" />
                </div>
              </a>
            </div>
          </div>
          <div
            className="card three"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <img
              src="Images/videocall.png"
              className="cardthreeImg"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1300"
            />
            <div className="cardbgone"></div>
            <div className="cardContent">
              <h2>Call a Doctor</h2>
              <p>
                "Connect with Your Doctor Anytime, Anywhere: Experience the
                Future of Healthcare with Video Consultations"
              </p>
              <a href="#">
                <div className="cardBtn">
                  <img src="Images/next.png" alt="" className="cardIcon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER AND FOOTER */}
      <div className="banner"></div>
    </div>
  );
};

export default Home;
