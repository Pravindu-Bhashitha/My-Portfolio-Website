import React, { useState } from "react";
import "./FormStyles.css";

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  console.log(name,email,subject,message);
  return (
    <div className="form">
      <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <label>Your Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email"id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Subject</label>
        <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your Message Here"
          name="message"
          value={message} onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
