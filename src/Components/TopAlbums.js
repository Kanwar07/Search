import React, { useEffect, useState } from "react";
import axios from "axios";
import CardQtify from "./CardQtify";
import { Button, Grid } from "@mui/material";
import "./TopAlbums.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function TopAlbums() {
  const [topalbums, settopalbums] = useState([]);
  const [collapsetopalbums, setcollapsetopalbums] = useState(true);

  const fetchapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then(function (response) {
        settopalbums(response.data);
      });
  };

  const handlecollapsetopalbums = () => {
    setcollapsetopalbums(!collapsetopalbums);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div>
      <div className="head">
        <h3 style={{ color: "white" }}>Top Albums</h3>
        <Button className="buttontopalbum" onClick={handlecollapsetopalbums}>
          Show All
        </Button>
      </div>
      {!collapsetopalbums ? (
        <Grid container spacing={2} className="topalbumdiv">
          {topalbums.map((data) => {
            const { id, image, follows, title } = data;
            return (
              <Grid item key={id} xs={12} sm={4} md={3} lg={2}>
                <CardQtify
                  id={id}
                  image={image}
                  follows={follows}
                  title={title}
                  songs={data.songs.length}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={6}
          className="myswiper"
        >
          <Grid container spacing={2} className="topalbumdiv">
            {topalbums.map((data) => {
              const { id, image, follows, title } = data;
              return (
                <Grid item key={id} xs={12} sm={4} md={3} lg={2}>
                  <SwiperSlide key={id}>
                    <CardQtify
                      id={id}
                      image={image}
                      follows={follows}
                      title={title}
                      songs={data.songs.length}
                    />
                  </SwiperSlide>
                </Grid>
              );
            })}
          </Grid>
        </Swiper>
      )}
    </div>
  );
}

export default TopAlbums;
