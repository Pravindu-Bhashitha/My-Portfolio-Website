import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage2 from "../components/Heroimage2";
import Work from "../components/Work";
import Projects from '../assets/Projects.jpg';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS" text="My Projects" img={Projects}/>
      <Work/>
      <Footer />
    </div>
  );
};

export default Project;
