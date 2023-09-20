import React, { Component } from "react";
import "./Heroimage2Style.css";

class Heroimage2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading" >
          <h1 style={{marginTop:"30px"}}>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <img src={this.props.img} alt="sampleimage" style={{height:"400px",borderRadius:"150px"}}></img>
        </div>
      </div>
    );
  }
}

export default Heroimage2;
