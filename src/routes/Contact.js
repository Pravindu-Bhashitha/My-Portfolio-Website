import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Contactform from "../components/Contactform";
import ME from "../assets/Me.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="CONTACT" text="Let's have a chat" img={ME} />
      <Contactform />
      <Footer />
    </div>
  );
};

export default Contact;
