import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <sectio className="error-page section">
      <div className="error-container">
        <h1>Oops! It's a dead end</h1>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </div>
    </sectio>
  );
};

export default Error;
