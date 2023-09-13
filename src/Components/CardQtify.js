import React from "react";
import "./CardQtify.css";
import { Card, CardMedia, Typography } from "@mui/material";
import Headphones from "../Assets/headphones.png";

function CardQtify() {
  return (
    <Card sx={{ maxWidth: 300 }} className="maincard">
      <div className="card">
        <Card sx={{ maxWidth: 250 }} className="innercard">
          <CardMedia
            component="img"
            height="250"
            image={Headphones}
            alt="image"
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ paddingLeft: 10 }}
          >
            <button className="cardbutton">100M Follows</button>
          </Typography>
        </Card>
      </div>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="cardtext"
      >
        New Bollywood
      </Typography>
    </Card>
  );
}

export default CardQtify;
