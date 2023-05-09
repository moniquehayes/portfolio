import React from "react";
import { Link } from "react-router-dom";
import logo from './logos/logo.png'

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            textAlign: "center",
            fontFamily: "Lora",
            color: "#70a0af",
            marginBottom: "3vh",
            marginTop: "8vh",
          }}
        >
          Monique Hayes
        </h1>
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "white",
            fontFamily: "Lora",
            color: "#9f8082",
          }}
        >
          Full Stack Software Engineer
        </h2>
      </div>
      <div
        style={{
          marginTop: "20vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "10rem",
            margin: "10px",
            backgroundColor: "#eddea4",
            height: "5rem",
            border: "2px solid #003249",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#003249",
              fontWeight: "bold",
            }}
          >
            About
          </Link>
        </div>
        <div
          style={{
            width: "10rem",
            margin: "10px",
            backgroundColor: "#eddea4",
            height: "5rem",
            border: "2px solid #003249",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/work"
            style={{
              textDecoration: "none",
              color: "#003249",
              fontWeight: "bold",
            }}
          >
            Work
          </Link>
        </div>
        <div
          style={{
            width: "10rem",
            margin: "10px",
            backgroundColor: "#eddea4",
            height: "5rem",
            border: "2px solid #003249",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#003249",
              fontWeight: "bold",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logo}
          style={{ position: "absolute", bottom: "3px" }}
        ></img>
      </div>
    </>
  );
};

export default Home;
