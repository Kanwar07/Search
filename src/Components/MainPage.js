import React from "react";
import "./MainPage.css";
import Search from "./Search";
import HeroImage from "./HeroImage";
import TopAlbums from "./TopAlbums";
import NewAlbums from "./NewAlbums";
import Songs from "./Songs";

function MainPage() {
  return (
    <React.Fragment>
      <Search />
      <HeroImage />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </React.Fragment>
  );
}

export default MainPage;
