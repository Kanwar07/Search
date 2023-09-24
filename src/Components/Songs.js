import React, { useEffect, useState } from "react";
import axios from "axios";
import CardQtify from "./CardQtify";
import { Grid } from "@mui/material";
import "./Songs.css";

function Songs() {
  const [songs, setsongs] = useState([]);

  const fetchapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then(function (response) {
        setsongs(response.data);
      });
  };

  useEffect(() => {
    fetchapi();
  });

  return (
    <Grid container spacing={2} className="songsdiv">
      {songs.map((data) => {
        const { id, image, likes, title } = data;
        return (
          <Grid item key={id} xs={12} sm={4} md={3} lg={2}>
            <CardQtify id={id} image={image} follows={likes} title={title} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Songs;
