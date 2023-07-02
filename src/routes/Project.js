import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage2 from "../components/Heroimage2";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS" text="My Projects"/>
      <Work/>
      <Footer />
    </div>
  );
};

export default Project;
