import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I have backslide from the presence of the Lord and it is a mistake I am actively working to correct</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
