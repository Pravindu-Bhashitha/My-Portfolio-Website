import "./HeroimageStyle.css";
import React from "react";
import IntroImg from "../assets/programmer.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Introimg" />
      </div>
      <div className="content">
        <p>Hi, I am an IT undergratuate of University of Moratuwa</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
