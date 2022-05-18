import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="section home">
      <div className="text">
        <h2>Nu stii ce facultate sa alegi?</h2>
        <h4>foloseste</h4>
        <h1 className="logo">College_Picker </h1>

        <Link to="/facultati" className="mainButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Landing;
