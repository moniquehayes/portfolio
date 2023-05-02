import React from "react";

const Contact = () => {

  return (
    <>
      <h1 style={{color: '#70a0af', textAlign: 'center'}}>Contact</h1>
      <div style={{backgroundColor: 'lightgrey'}}>
      <form
        action="https://getform.io/f/1dd2f7b6-4fc0-48d9-ad15-5226dfefaccd"
        method="POST"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input type="text" name="name" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input type="email" name="email" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Subject
          </label>
          <input type="text" name="subject" required></input>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Message
          </label>
          <input type="text" name="message" required></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Contact;
