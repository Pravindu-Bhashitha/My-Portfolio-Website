import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimage2 from "../components/Heroimage2";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS" text="My Projects"/>
      <WorkCard/>
      <Footer />
    </div>
  );
};

export default Project;
