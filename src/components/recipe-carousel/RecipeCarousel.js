import React, { useState } from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./recipe-carousel.styles.scss";
import "swiper/components/navigation/navigation.scss";
import "../../../node_modules/swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

const RecipeCarousel = ({ recipes }) => {
  return (
    <div className="carousel">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {recipes.map((recipe, index) => {
          return (
            <SwiperSlide>
              <RecipeCard recipe={recipe} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecipeCarousel;
