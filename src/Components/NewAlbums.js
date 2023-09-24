import React, { useEffect, useState } from "react";
import axios from "axios";
import CardQtify from "./CardQtify";
import { Grid } from "@mui/material";
import "./NewAlbums.css";

function NewAlbums() {
  const [newalbums, setnewalbums] = useState([]);

  const fetchapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then(function (response) {
        setnewalbums(response.data);
      });
  };

  useEffect(() => {
    fetchapi();
  });

  return (
    <Grid container spacing={2} className="newalbumdiv">
      {newalbums.map((data) => {
        const { id, image, follows, title } = data;
        return (
          <Grid item key={id} xs={12} sm={4} md={3} lg={2}>
            <CardQtify id={id} image={image} follows={follows} title={title} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NewAlbums;
