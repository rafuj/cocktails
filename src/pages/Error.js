import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1 className="section-title">Oops ! Its a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
