import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <h1><u>About Us</u></h1>
      <p>
        Welcome to our Health Card System, designed to revolutionize healthcare
        accessibility and affordability for all.
      </p>

      <div className="motto-section">
        <h1>Our Motto</h1>
        <p>
          Our motto,{" "}
          <em>"Healthcare Made Simple, Accessible, and Affordable,"</em>{" "}
          underscores our commitment to breaking down barriers to healthcare and
          ensuring that everyone can access the services they need when they
          need them.
        </p>
        <p>
          We believe that healthcare should be transparent, easy to understand,
          and available to all, regardless of socioeconomic status. With our
          Health Card System, we aim to empower individuals to take control of
          their health and well-being.
        </p>
      </div>

      <div className="benefits-section">
        <h1>Key Features and Benefits</h1>
        <p>
          Our Health Card System offers a range of benefits designed to make
          healthcare more convenient, accessible, and affordable:
        </p>
        <ul>
          <li>
            <strong>Comprehensive Coverage:</strong> With our health card,
            individuals gain access to a wide range of medical services,
            including consultations, diagnostics, treatments, and more.
          </li>
          <li>
            <strong>Network of Providers:</strong> We partner with a diverse
            network of healthcare providers, ensuring that our members have
            access to quality care wherever they are.
          </li>
          <li>
            <strong>Easy Enrollment:</strong> Our enrollment process is simple
            and hassle-free, allowing individuals to sign up for a health card
            quickly and easily.
          </li>
          <li>
            <strong>Cost Savings:</strong> Our health card system offers
            significant cost savings compared to traditional healthcare options,
            making quality healthcare more affordable for everyone.
          </li>
          <li>
            <strong>24/7 Support:</strong> Our dedicated support team is
            available round-the-clock to assist members with any questions,
            concerns, or issues they may have.
          </li>
        </ul>
      </div>

      <h1 style={{ textAlign: "center" }}>Our Team</h1>

      <div className="row">
        <div className="column" >
          <div className="card">
            <img
              src="./Images/doc.png"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Dr Jenny</h2>
              <p className="title">CEO & Founder</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="./Images/img2.png"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Er Gaurav </h2>
              <p className="title">Art Director</p>
              <p>gauravraaz2005@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="./Images/img3.png"
              alt="John"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Er Ankit Sharma</h2>
              <p className="title">Designer</p>
              <p>ankitsharma7805@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
