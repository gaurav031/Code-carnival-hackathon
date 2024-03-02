import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-us-section">
      <h1>Contact Us</h1>
      <p>
        Have a question or feedback?  <br /> We'd love to hear from you! Reach out to us
        using the form below or contact us directly via phone or email.
      </p>

      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p>Phone: +91 8298*******</p>
        <p>Email: info@example.com</p>
        <p>Address: 360003 Main Street, Rajkot, India</p>
      </div>
    </div>
  );
}

export default Contact;
