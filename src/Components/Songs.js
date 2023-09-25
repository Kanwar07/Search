import React, { useEffect, useState } from "react";
import axios from "axios";
import CardQtify from "./CardQtify";
import { Grid } from "@mui/material";
import "./Songs.css";
import { Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Songs() {
  const [songs, setsongs] = useState([]);
  const [genre, setgenre] = useState([]);
  const [listfilter, setlistfilter] = useState("jazz");

  const fetchsongsapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then(function (response) {
        setsongs(response.data);
      });
  };

  const fetchgenreapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then(function (response) {
        setgenre(response.data.data);
      });
  };

  const handlegenre = (e) => {
    console.log(e);
    setlistfilter(e);
  };

  useEffect(() => {
    fetchsongsapi();
    fetchgenreapi();
  }, []);

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <h3
        style={{
          backgroundColor: "#121212",
          marginTop: "0rem",
          padding: "1rem",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Songs
      </h3>
      <div className="genreouter">
        {genre.map((data) => {
          return (
            <div key={data.key} className="genre">
              <Button
                style={{ color: "white" }}
                onClick={(e) => handlegenre(data.label)}
              >
                {data.label}
              </Button>
            </div>
          );
        })}
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        className="myswiper"
      >
        <Grid container spacing={2} className="songsdiv">
          {songs
            .filter(
              (data) =>
                data.genre.label.toLowerCase() === listfilter.toLowerCase()
            )
            .map((data) => {
              const { id, image, likes, title } = data;
              return (
                <Grid item key={id} xs={12} sm={4} md={3} lg={2}>
                  <SwiperSlide key={id}>
                    <CardQtify
                      id={id}
                      image={image}
                      follows={likes}
                      title={title}
                    />
                  </SwiperSlide>
                </Grid>
              );
            })}
        </Grid>
      </Swiper>
    </div>
  );
}

export default Songs;
