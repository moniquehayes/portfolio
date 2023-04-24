import React from "react";


const Contact = () => {

    const formSend = () => ({
        Host : "smtp.elasticemail.com",
        Username : process.env.REACT_APP_USERNAME,
        Password : process.env.REACT_APP_PASSWORD,
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

    return (
        <>
        <h1>Contact</h1>
        <form onSubmit={formSend}>
            <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required></input>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">Subject</label>
                    <input type="text" required></input>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">Message</label>
                    <input type="text" required></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    {/**make an onclick function that sends an email */}
                </div>
        </form>
        {/** add email and github link */}
        </>
    )
};

export default Contact;