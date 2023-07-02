import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>No.63, Kudawella South</p>
              <p>Nakulugamuwa.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +94 70 556 1511
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              pravindubh@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a dedicated, self-driven, and enthusiastic student striving to
            contribute to the betterment of humanity.
          </p>
          <div className="social">
            <Link to="https://www.instagram.com/bhashitha_s_hennadi99/">
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
            <Link to="https://www.linkedin.com/in/pravindu-bhashitha/">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
            <Link to="https://www.facebook.com/pravindu.bhashitha">
             <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
            <Link to="https://github.com/Pravindu-Bhashitha">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
