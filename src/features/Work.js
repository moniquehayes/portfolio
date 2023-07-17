import React from "react";
import yummify from './images/yummify.png';
import pickmeup from './images/pickmeup.png';
import wildroots from './images/wildroots.png';
import css from './logos/css.jpeg';
import firebase from './logos/firebase.png';
import github from './logos/github-mark.png';
import html from './logos/html.png';
import js from './logos/js.png';
import node from './logos/node.png';
import postgres from './logos/postgresql.png';
import router from './logos/react-router-stacked-monotone.png';
import react from './logos/react.png';
import redux from './logos/redux.png';
import sequelize from './logos/sequelize.png';
import webpack from './logos/webpack.png';

const Work = () => {
  return (
    < >
      <h1
        style={{
          textAlign: "center",
          color: "#70a0af",
          fontFamily: "lora",
          fontWeight: "bold",
        }}
      >
        Work
      </h1>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid #9f8082",
            backgroundColor: "white",
            borderRadius: "6px",
            margin: "5px",
            padding: "3px",
            width: "20rem",
            position: "relative",
            paddingBottom: "5vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#9f8082",
              fontFamily: "adamina",
            }}
          >
            Yummify
          </h2>
          <div
            style={{
              width: "20rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={yummify} style={{ width: "18rem" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.youtube.com/watch?v=K3fjTKBAuxE"
              style={{
                color: "#70a0af",
                fontWeight: "bold",
                fontFamily: "adamina",
              }}
            >
              Watch demo
            </a>
          </div>
          <p style={{ color: "#292f36", padding: "3px", textAlign: "center" }}>
            A full stack application which works to reduce food waste by
            providing an avenue for restaurants to sell their unsold meals
            and/or items for discounted prices to consumers. Key technologies
            used in development include Node.js, React, JavaScript, Firebase,
            Redux, Bootstrap, Webpack, GoogleMapsAPI
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <a
              href="https://yummify-352b4.web.app/"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                backgroundColor: "#eddea4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>View Site</p>
            </a>
            <a
              href="https://github.com/yummify/yummify"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#eddea4",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>
                View on Github
              </p>
            </a>
          </div>
        </div>
        <div
          style={{
            border: "2px solid #9f8082",
            backgroundColor: "white",
            borderRadius: "6px",
            margin: "5px",
            padding: "3px",
            width: "20rem",
            position: "relative",
            paddingBottom: "5vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "adamina",
              color: "#9f8082",
            }}
          >
            Pick me UP
          </h2>
          <div
            style={{
              width: "20rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={pickmeup} style={{ width: "18rem" }} />
          </div>
          <p style={{ color: "#292f36", padding: "3px", textAlign: "center" }}>
            A frontend site that generates inspirational quotes for users,
            utilizing 34 different categories with up to 10 quotes within each
            category. Key technologies used in development include React,
            JavaScript, Node.js, HTML5, CSS3
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <a
              href="https://moniquehayes.github.io/stackathon2/"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                backgroundColor: "#eddea4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>View Site</p>
            </a>
            <a
              href="https://github.com/moniquehayes/stackathon2"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                backgroundColor: "#eddea4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>
                View on Github
              </p>
            </a>
          </div>
        </div>
        <div
          style={{
            border: "2px solid #9f8082",
            backgroundColor: "white",
            borderRadius: "6px",
            margin: "5px",
            padding: "3px",
            width: "20rem",
            position: "relative",
            paddingBottom: "5vh",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#9f8082",
              fontFamily: "adamina",
            }}
          >
            Wild Roots
          </h2>
          <div
            style={{
              width: "20rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={wildroots} style={{ width: "18rem" }} />
          </div>
          <p style={{ color: "#292f36", padding: "3px", textAlign: "center" }}>
            A full stack ecommerce site for plants utilizing Node.js, React,
            Redux, JavaScript, React Bootstrap, Stripe, Express, Webpack, and
            Sequelize
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <a
              href=" http://www.shop-wild-roots.com/"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                backgroundColor: "#eddea4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>View Site</p>
            </a>
            <a
              href="https://github.com/The-Shopperettes/grace-shopper"
              target="_blank"
              style={{
                textDecoration: "none",
                fontFamily: "adamina",
                width: "8rem",
                backgroundColor: "#eddea4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #003249",
                borderRadius: "4px",
                margin: "0 1rem",
              }}
            >
              <p style={{ color: "#003249", fontWeight: "bold" }}>
                View on Github
              </p>
            </a>
          </div>
        </div>
      </main>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#EFEBEB",
          width: "70vw",
          borderRadius: "8px",
          border: "1px solid #70a0af",
          padding: "3px",
          marginTop: "10px",
          marginLeft: "5vw",
          marginRight: "5vw",
        }}
      >
        <h2 style={{ fontFamily: "lora", color: "#70a0af" }}>Tech Stack</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img
            src={js}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={node}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={react}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={router}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={redux}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={sequelize}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={github}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={html}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={css}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={webpack}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={postgres}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
          <img
            src={firebase}
            style={{ height: "2.5rem", marginLeft: "1vw" }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Work;
