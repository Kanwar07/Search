import React from "react";
import "./CardQtify.css";
import { Card, CardMedia, Typography, Tooltip } from "@mui/material";

function CardQtify(props) {
  return (
    <Tooltip title={props.songs} size="lg" placement="top">
      <Card sx={{ maxWidth: "auto" }} className="maincard">
        <div className="card">
          <Card sx={{ maxWidth: "auto" }} className="innercard">
            <CardMedia
              component="img"
              height="250"
              image={props.image}
              alt="image"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ paddingLeft: 10 }}
            >
              <button className="cardbutton">{props.follows}</button>
            </Typography>
          </Card>
        </div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="cardtext"
        >
          {props.title}
        </Typography>
      </Card>
    </Tooltip>
  );
}

export default CardQtify;
