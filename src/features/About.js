import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        style={{

          margin: "10vh 0",
          border: "2px solid #9f8082",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <div style={{ margin: "5vw" }}>
          <h1
            style={{ color: "#70a0af", fontFamily: "lora", fontWeight: "bold" }}
          >
            Monique Hayes
          </h1>
          <p style={{fontSize: '1rem'}}>
            I'm a former Teacher and Operations Manager turned Full Stack
            Software Engineer with an eye for detail and a passion for
            collaborating with others. I've always loved math, logic, design,
            and problem solving.
            <br />
            <br />I studied Full Stack Web Development at the Grace Hopper
            immersive bootcamp through Fullstack Academy. I spent 18 weeks
            learning full stack web development, collaborating with my fellow
            cohort members, and creating fully-functional web applications. Some
            of my work from the program can be viewed{" "}
            <Link to="/work">here</Link>.
            <br />
            <br />I have experience in collaborative, fast-paced environments.
            In my previous roles it was crucial for me to think on my feet,
            successfully manage my time between various roles, and quickly
            respond to data.
            <br />
            <br />
            As I enter the job market, I am interested in working in Full Stack
            or Frondend development. I am looking for a company that not only is
            working to make positive growth and change in the world, but
            furthermore is passionate about fostering community and growth
            amongst its employees.
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src="headshot.jpeg" style={{width: '15rem'}}/>
        </div>
      </div>
    </>
  );
};

export default About;
