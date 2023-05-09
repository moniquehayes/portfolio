import React from "react";
import linkedIn from './logos/LI-In-Bug.png';
import github from './logos/github-mark.png';

const Contact = () => {
  return (
    <>
      <h1
        style={{
          color: "#70a0af",
          textAlign: "center",
          fontFamily: "lora",
          fontWeight: "bold",
        }}
      >
        Contact
      </h1>
      <div
        style={{
          backgroundColor: "white",
          border: "2px solid #9f8082",
          borderRadius: "8px",
          fontFamily: "adamina",
        }}
      >
        <form
          action="https://getform.io/f/1dd2f7b6-4fc0-48d9-ad15-5226dfefaccd"
          method="POST"
          style={{ padding: "20px" }}
        >
          <div>
            <label style={{ margin: "10px" }}>Name</label>
            <input
              type="text"
              name="name"
              required
              style={{
                borderRadius: "4px",
                border: "1px solid lightgrey",
                width: "40%",
                fontSize: "1rem",
                padding: "5px",
                fontFamily: "adamina",
                margin: "10px 0",
                marginLeft: "19px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ margin: "10px" }}>Email</label>
            <input
              type="email"
              name="email"
              required
              style={{
                borderRadius: "4px",
                border: "1px solid lightgrey",
                width: "40%",
                fontSize: "1rem",
                padding: "5px",
                fontFamily: "adamina",
                margin: "10px 0",
                marginLeft: "20px",
              }}
            ></input>
          </div>
          <div>
            <label style={{ margin: "10px" }}>Subject</label>
            <input
              type="text"
              name="subject"
              required
              style={{
                borderRadius: "4px",
                border: "1px solid lightgrey",
                width: "50%",
                fontSize: "1rem",
                padding: "5px",
                fontFamily: "adamina",
                margin: "10px 0",
                marginLeft: "7px",
              }}
            ></input>
          </div>
          <div style={{ display: "flex", alignItems: "top" }}>
            <label style={{ margin: "10px" }}>Message </label>
            <input
              type="text"
              name="message"
              required
              style={{
                borderRadius: "4px",
                border: "1px solid lightgrey",
                width: "70%",
                height: "30vh",
                fontSize: "1rem",
                padding: "5px",
                fontFamily: "adamina",
                margin: "10px 0",
                alignContent: "top",
              }}
            ></input>
          </div>
          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              style={{
                border: "2px solid #003249",
                padding: "5px",
                borderRadius: "4px",
                backgroundColor: "#eddea4",
                color: "#003249",
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "adamina",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p>moniqueehayes5@gmail.com</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.linkedin.com/in/monique-hayes/" target="_blank">
            <img
              src={linkedIn}
              style={{ height: "4vh", filter: "grayscale()" }}
            ></img>
          </a>
          <a href="https://github.com/moniquehayes" target="_blank">
            <img src={github} style={{ height: "4vh" }}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
