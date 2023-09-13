import React from "react";
import "./HeroImage.css";
import Headphones from "../Assets/headphones.png";

function HeroImage() {
  return (
    <div className="heroimage">
      <div className="text">
        100 Thousand Songs, ad-free
        <br />
        Over thousands podcast episodes
      </div>
      <div>
        <img src={Headphones} alt="Headphones" />
      </div>
    </div>
  );
}

export default HeroImage;
