import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-heading">Do you know triangles?</h1>
      <div className="button-container">
        <Link
          style={{ textDecoration: "none" }}
          to="/find-area"
          className="home-button"
        >
          Let's see
        </Link>
      </div>
    </div>
  );
}
