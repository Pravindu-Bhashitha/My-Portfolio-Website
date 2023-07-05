import React from "react";
import "./FormStyles.css";

const ContactForm = () => {
  return (
    <div className="form">
      <form name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <label>Your Name</label>
        <input type="text" id="name" name="name" required />
        <label>Email</label>
        <input type="email"id="email" name="email" required />
        <label>Subject</label>
        <input type="text" id="subject" name="subject" required />
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
