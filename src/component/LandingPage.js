import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const todayDate = new Date().toJSON();
  return (
    <header>
      <h1 className="main-title text-center">Triage System</h1>
      <div className="buttons text-center">
        <Link to="/login">
          <button className="primary-button">log in</button>
        </Link>
        <Link to="/form">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
      </div>
    </header>
  );
}
