import React from "react";
import { Link } from "react-router-dom";
import headshot from "./images/headshot.jpeg";

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
          width: '100%'
        }}
      >
        <h1
          style={{
            color: "#70a0af",
            fontFamily: "lora",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Monique Hayes
        </h1>
        <div style={{ margin: "5vw", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: 'row', width: '90%' }}>
          <div className="about-child" style={{width: '60%'}}>
            <p style={{ fontSize: "1rem" }}>
              I'm a former Teacher and Operations Manager turned <span style={{color: "#70a0af", fontWeight: 'bold'}}>Full Stack
              Software Engineer</span> with an <span style={{color: "#70a0af", fontWeight: 'bold'}}>eye for detail</span> and a <span style={{color: "#70a0af", fontWeight: 'bold'}}>passion for
              collaborating with others</span>. I've always loved math, logic, design,
              and problem solving.
              <br />
              <br />I studied Full Stack Web Development at the <span style={{color: "#70a0af", fontWeight: 'bold'}}>Grace Hopper
              immersive bootcamp through Fullstack Academy</span>. I spent 18 weeks
              learning full stack web development, collaborating with my fellow
              cohort members, and creating fully-functional web applications.
              Some of my work from the program can be viewed{" "}
              <Link to="/work">here</Link>.
              <br />
              <br />I have <span style={{color: "#70a0af", fontWeight: 'bold'}}>experience in collaborative, fast-paced environments</span>.
              In my previous roles it was crucial for me to think on my feet,
              successfully manage my time between various roles, and quickly
              respond to data.
              <br />
              <br />
              As I enter the job market, I am interested in working in Full
              Stack or Frontend development. I am looking for a company that not
              only is working to make positive growth and change in the world,
              but furthermore is passionate about fostering community and growth
              amongst its employees.
            </p>
          </div>
          <div className="about-child" style={{ display: "flex", justifyContent: "center" }}>
            <img src={headshot} style={{ width: "15rem" }} />
          </div>
          <div className="about-child-skills" style={{backgroundColor: "#EFEBEB", borderRadius: "8px", padding: '3px', margin: '7px'}}>
              <strong>What do you care about?</strong>
              <br/>
              <p>I am passionate about helping the people around me and making sure they feel <span style={{color: "#70a0af", fontWeight: 'bold'}}>seen and heard</span> - whether that’s with customers I serve or the coworkers I work alongside of. I believe that we may never know the true value of a small gesture, a kind word, or a quick smile. No matter if I spend my days building a website, or tutoring a friend’s child, or playing with my nephews, this is what I try to live by.</p>
              <strong>What quality differentiates you as a professional?</strong>
              <br/>
              <p>I am a very <span style={{color: "#70a0af", fontWeight: 'bold'}}>strong communicator</span>, which I think is an invaluable skill on any team, in any industry. I think that clear and consistent communication is the key to a successful team and organization.</p>
              <strong>If there's a problem, which skills are you most likely to contribute to a solution?</strong>
              <p>When faced with a problem, I utilize my <span style={{color: "#70a0af", fontWeight: 'bold'}}>intuitiveness</span> to ask detailed questions about what caused it and what the problem’s consequences are. From there, I connect with other stakeholders through <span style={{color: "#70a0af", fontWeight: 'bold'}}>collaboration and clear communication</span> in order to determine next steps and create a plan to solve the problem.</p>
          </div>
          <div className="about-child-facts" style={{backgroundColor: '#eddea4', borderRadius: "8px", padding: '3px', margin: '7px', display: 'flex', alignItems: 'center'}}>
            <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
            <li>I'm one of five siblings - <span style={{color: "#70a0af", fontWeight: 'bold'}}>I love a collaborative, fast-paced environment</span></li>
            <li>I've travelled to 16 different countries and most recently spent two weeks walking through Portugal and Spain - <span style={{color: "#70a0af", fontWeight: 'bold'}}>I like to try new and adventurous things</span></li>
            <li>In my free time I enjoy exercising, hearing live music, and tryout out new restaurants with friends - <span style={{color: "#70a0af", fontWeight: 'bold'}}>I value a clear work / life balance</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
