import React from "react";
import "./MainPage.css";
import Search from "./Search";
import HeroImage from "./HeroImage";
import TopAlbums from "./TopAlbums";

function MainPage() {
  return (
    <React.Fragment>
      <Search />
      <HeroImage />
      <TopAlbums />
    </React.Fragment>
  );
}

export default MainPage;
