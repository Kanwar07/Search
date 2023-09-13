import React from "react";
import "./Search.css";
import Searchicon from "../Assets/Searchicon.png";

function Search() {
  return (
    <>
      <div className="search">
        <div className="icon">Qtify</div>
        <div className="input">
          <input
            type="search"
            size="35"
            placeholder="Search a song of your choice"
          />
          <button>
            <img className="image" src={Searchicon} alt="search" />
          </button>
        </div>
        <div>
          <button className="button">Give Feedback</button>
        </div>
      </div>
    </>
  );
}

export default Search;
