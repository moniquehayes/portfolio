import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column'}}>
        <h1 style={{fontSize: '6rem', textAlign: 'center', fontFamily: 'Lora', color: '#70a0af'}}>Monique Hayes</h1>
        <p style={{textAlign: 'center'}}>I'm a former Geometry Teacher turned Full Stack Software Engineer with an eye for detail, strong communication skills, and a passion for collaborating with others. </p>
        </div>
        <div style={{marginTop: '20vh',  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div style={{width: '10rem', margin: '10px', backgroundColor: '#eddea4', height: '5rem', border: '2px solid #9f8082', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link to="/about" style={{textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}}>About</Link>
            </div>
            <div style={{width: '10rem', margin: '10px', backgroundColor: '#eddea4', height: '5rem', border: '2px solid #9f8082', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link to="/work" style={{textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}}>Work</Link>
            </div>
            <div style={{width: '10rem', margin: '10px', backgroundColor: '#eddea4', height: '5rem', border: '2px solid #9f8082', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link to="/contact" style={{textDecoration: 'none', color: '#70a0af', fontWeight: 'bold'}}>Contact</Link>
            </div>
        </div>
        <div style={{textAlign: 'center'}}>
        <img src="favicon.ico"></img>
        </div>
        </>
    )
}

export default Home;