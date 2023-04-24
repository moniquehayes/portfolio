import React from "react";

const About = () => {

    return (
        <>
        <h1 className=" underline bg-blue">About</h1>
        {/**ADD PHOTO */}
        <p>I'm a former Geometry Teacher turned Full Stack Software Engineer with an eye for detail and a passion for collaborating with others. I've always loved math, logic, and problem solving. After taking on a part-time Operations role during my last year of teaching, I realized I also loved logistics and data, and I wanted to harness this newfound love as I looked to make a career shift. After exploring SQL through an online Cornell course, along with some phenomenal guidance from a mentor of mine, I decided that a Software Engineering bootcamp, and more specifically, the Grace Hopper Program at Fullstack Academy, would be the perfect way to make this shift. Throughout the program I have loved discovering new languages and gaining the knowledge base to create full stack websites in just a few short months. I am most interested in Full Stack and Frontend Development roles. As I enter the job market, I am looking for a company that not only is working to make positive growth and change in the world, but furthermore is passionate about fostering community and growth amongst its employees.</p>
        <p>Please take a look at some of the projects I've done below!</p>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div>
                <h3>Yummify</h3>
                <p>add pic and link</p>
            </div>
            <div>
                <h3>Pick Me UP</h3>
                <p>add pic and link</p>
            </div>
            <div>
                <h3>Wild Roots</h3>
                <p>add pic and link</p>
            </div>
        </div>
        </>
    )
};

export default About;