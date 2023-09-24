import React from "react";
import "./MainPage.css";
import Search from "./Search";
import HeroImage from "./HeroImage";
import TopAlbums from "./TopAlbums";
import NewAlbums from "./NewAlbums";

function MainPage() {
  return (
    <React.Fragment>
      <Search />
      <HeroImage />
      <TopAlbums />
      <NewAlbums />
    </React.Fragment>
  );
}

export default MainPage;
