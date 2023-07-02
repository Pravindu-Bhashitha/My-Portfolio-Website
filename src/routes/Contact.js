import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Contactform from "../components/Contactform";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT" text="Let's have a chat"/>
      <Contactform/>
      <Footer />
    </div>
  );
};

export default Contact;
