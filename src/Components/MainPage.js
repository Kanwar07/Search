import React from "react";
import "./MainPage.css";
import Search from "./Search";
import HeroImage from "./HeroImage";

function MainPage() {
  return (
    <React.Fragment>
      <Search />
      <HeroImage />
    </React.Fragment>
  );
}

export default MainPage;
