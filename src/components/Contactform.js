import React from "react";
import "./FormStyles.css";

const ContactForm = () => {
  return (
    <div className="form">
      <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <label>Your Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your Message Here"
          name="message"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
