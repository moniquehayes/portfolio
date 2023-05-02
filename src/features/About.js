import React from "react";

const About = () => {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10vh 0', border: '2px solid #9f8082', padding:'10px', borderRadius: '8px', backgroundColor: 'white'}}>
        <img src="headshot.jpeg" style={{ width: '23vw', height: '60vh'}} />
        <div style={{margin: '5vw'}}>
        <h1 style={{color: '#70a0af', fontFamily: 'lora', fontWeight: 'bold'}}>Monique Hayes</h1>
          <p>
            I'm a former Geometry Teacher turned Full Stack Software Engineer
            with an eye for detail and a passion for collaborating with others.
            I've always loved math, logic, and problem solving. After taking on
            a part-time Operations role during my last year of teaching, I
            realized I also loved logistics and data, and I wanted to harness
            this newfound love as I looked to make a career shift. After
            exploring SQL through an online Cornell course, along with some
            phenomenal guidance from a mentor of mine, I decided that a Software
            Engineering bootcamp, and more specifically, the Grace Hopper
            Program at Fullstack Academy, would be the perfect way to make this
            shift. Throughout the program I have loved discovering new languages
            and gaining the knowledge base to create full stack websites in just
            a few short months. I am most interested in Full Stack and Frontend
            Development roles. As I enter the job market, I am looking for a
            company that not only is working to make positive growth and change
            in the world, but furthermore is passionate about fostering
            community and growth amongst its employees.
          </p>
          <p>
            In my free time I enjoy exercising, travelling, spending time with
            family and friends, and testing out local coffee shops &
            restaurants. I am currently based in New Orleans, LA.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
