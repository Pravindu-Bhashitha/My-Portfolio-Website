import React from "react";
import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import java from "../assets/Java.png";
import python from "../assets/Python.png";
import react from "../assets/React.jpg";
import SQL from "../assets/SQLN.png";
import NET from "../assets/NETN.png";
// import ME from "../assets/Me.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        {/* <img src={ME} alt="ProfilePhoto" className="pro-photo"></img> */}
        <h1>Who Am I?</h1>
        <p style={{marginBottom:"10px"}}>
          I am a dedicated, self-driven, and enthusiastic student striving to
          contribute to the betterment of humanity.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <div className="right">
          <h1>Technologies I am good at...</h1>
          <div className="img-container">
            <img src={java} alt="javaimage" style={{width:"100px",height:"80px",margin:"0 20px 0 0"}}></img>
            <img src={python} alt="pythonimage" style={{width:"80px",height:"80px",margin:"0 20px 0 0"}}></img>
            <img src={react} alt="reactimage" style={{width:"100px",height:"80px",margin:"0 20px 0 0"}}></img>
            <img src={SQL} alt="sqlimage" style={{width:"100px",height:"80px",margin:"0 20px 0 -25px"}}></img>
            <img src={NET} alt="sqlimage" style={{width:"100px",height:"80px",margin:"0 20px 0 -25px"}}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
