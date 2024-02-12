import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
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
  );
};

export default Home;
