// import React, { useState } from "react";
// import "./FormStyles.css";

// const ContactForm = () => {
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [subject,setSubject] = useState("");
//   const [message,setMessage] = useState("");
//   console.log(name,email,subject);
//   return (
//     <div className="form">
//       <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
//         <input type="hidden" name="form-name" value="contact"/>
//         <label htmlFor="name">Your Name</label>
//         <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <label htmlFor="subject">Subject</label>
//         <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
//         <label htmlFor="message">Message</label>
//         <textarea
//           rows="6"
//           placeholder="Type Your Message Here"
//           name="message"
//           value={message} onChange={(e) => setMessage(e.target.value)}
//         />
//         <button className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./FormStyles.css";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  console.log(name,email,subject);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcn0v0i', 'template_l5p8rpv', form.current, 'YgtBeZpyGjuFWP3bc')
      .then((result) => {
          console.log(result.text);
          toast("Email Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" rows="6"/>
      <input type="submit" value="Send" className="btn"/>
      <ToastContainer/>
    </form>
    </div>
  );
};

export default ContactForm;

