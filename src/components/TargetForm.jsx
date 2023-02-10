import React, { useState } from "react";
import { images } from "../constants";
import "./TargetForm.css";

export default function TargetForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="form-card">
        <div>
          <img className="form-image" src={images.form_logo} alt="Form Logo" />
        </div>
        <h2>
          It's a delight to have <br />
          you onboard
        </h2>
        <h3>Help us know you better</h3>
        <div className="form-control">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g: John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g: Alpha Inc."
              />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <select name="industry">
                <option>Select</option>
                <option>IT</option>
                <option>Medical</option>
                <option>Corporate</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="locations">Number of Locations</label>
              <select name="locations">
                <option>1-20</option>
                <option>21-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <button type="submit" className="started_btn">
              Get Started
            </button>
            <p>OR</p>
            <div className="authing">
              <button className="auth_btn">Log In</button>
              <button className="auth_btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <h3>
        <a href="https://drive.google.com/file/d/185Qg5f3c-zRUh2Pip7TaMrzrQGhblx_e/view?usp=sharing">
          Terms of use
        </a>{" "}
        |{" "}
        <a href="https://drive.google.com/file/d/185Qg5f3c-zRUh2Pip7TaMrzrQGhblx_e/view?usp=sharing">
          Privacy Policy
        </a>
      </h3>
    </>
  );
}
