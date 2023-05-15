import React from "react";
import { Link } from "react-router-dom";
import logo from './logos/logo.png'

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "10vh",
      }}
    >
      <div style={{ marginLeft: "5px" }}>
        <Link to="/"><img src={logo}></img></Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          fontFamily: "lora",
          fontWeight: "bold",
        }}
      >
        <Link
          style={{
            margin: "0 1vw",
            textDecoration: "none",
            color: "#70a0af",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          id="home"
          to="/"
        >
          Home
        </Link>
        <Link
          style={{
            margin: "0 1vw",
            textDecoration: "none",
            color: "#70a0af",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          id="about"
          to="/about"
        >
          About
        </Link>
        <Link
          style={{
            margin: "0 1vw",
            textDecoration: "none",
            color: "#70a0af",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          id="work"
          to="/work"
        >
          Work
        </Link>
        <Link
          style={{
            margin: "0 1vw",
            textDecoration: "none",
            color: "#70a0af",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
          id="contact"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
