import React from "react";
import "./FormStyles.css";

const Contactform = () => {
  return (
    <div className="form">
      <form action="https://formsubmit.co/goduwaranaa@gmail.com" method="POST">
        <label>Your Name</label>
        <input type="text" name="name" required></input>
        <label>Email </label>
        <input type="email" name="email" required/>
        <label>Subject</label>
        <input type="text" name="subject" required/>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here" name="Message" />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactform;
