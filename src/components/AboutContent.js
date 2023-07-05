import React from "react";
import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import java from "../assets/Java.png";
import python from "../assets/Python.png";
import react from "../assets/React.jpg";
import SQL from "../assets/SQLN.png";
import NET from "../assets/NETN.png";
import CV from "../assets/Pravindu_Bhashitha_SE.pdf";

const AboutContent = () => {
  const handleDownloadCV = () => {
    // Create a virtual link element
    const link = document.createElement("a");
    link.href = CV; // URL of your CV file
    link.download = "Pravindu_Bhashitha.pdf"; // The default name for the downloaded file
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p style={{ marginBottom: "10px" }}>
          I am a dedicated, self-driven, and enthusiastic student striving to
          contribute to the betterment of humanity.
        </p>
        <button
          className="btn"
          style={{ width: "60%", marginLeft: "20%", marginBottom: "5%" }}
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <div className="right">
          <h1>Technologies I am good at...</h1>
          <div className="img-container">
            <img
              src={java}
              alt="javaimage"
              style={{ width: "100px", height: "80px", margin: "0 20px 0 0" }}
            ></img>
            <img
              src={python}
              alt="pythonimage"
              style={{ width: "80px", height: "80px", margin: "0 20px 0 0" }}
            ></img>
            <img
              src={react}
              alt="reactimage"
              style={{ width: "100px", height: "80px", margin: "0 20px 0 0" }}
            ></img>
            <img
              src={SQL}
              alt="sqlimage"
              style={{
                width: "100px",
                height: "80px",
                margin: "0 20px 0 -25px",
              }}
            ></img>
            <img
              src={NET}
              alt="sqlimage"
              style={{
                width: "100px",
                height: "80px",
                margin: "0 20px 0 -25px",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
