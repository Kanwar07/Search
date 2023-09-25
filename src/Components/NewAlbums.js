import React, { useEffect, useState } from "react";
import axios from "axios";
import CardQtify from "./CardQtify";
import { Grid } from "@mui/material";
import "./NewAlbums.css";
import { Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function NewAlbums() {
  const [newalbums, setnewalbums] = useState([]);
  const [collapsenewalbums, setcollapsenewalbums] = useState(true);

  const fetchapi = () => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/new")
      .then(function (response) {
        setnewalbums(response.data);
      });
  };

  const handlecollapsenewalbums = () => {
    setcollapsenewalbums(!collapsenewalbums);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div>
      <div className="head">
        <h3 style={{ color: "white" }}>New Albums</h3>
        <Button className="buttonnewalbum" onClick={handlecollapsenewalbums}>
          Show All
        </Button>
      </div>
      {!collapsenewalbums ? (
        <Grid container spacing={2} className="newalbumdiv">
          {newalbums.map((data) => {
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
          <Grid container spacing={2} className="newalbumdiv">
            {newalbums.map((data) => {
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

export default NewAlbums;
