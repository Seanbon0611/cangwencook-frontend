import React, { useState } from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazyload";
import Spinner from "../../components/spinner/Spinner";
import "./recipe-carousel.styles.scss";
import "swiper/components/navigation/navigation.scss";
import "../../../node_modules/swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);

const RecipeCarousel = ({ recipes }) => {
  return (
    <div className="carousel">
      <Swiper spaceBetween={0} slidesPerView={1} navigation>
        {recipes.map((recipe, index) => {
          return (
            <LazyLoad
              key={recipe.id}
              height={100}
              offset={[-100, 100]}
              placeholder={<Spinner />}
            >
              <SwiperSlide key={index}>
                <RecipeCard recipe={recipe} />
              </SwiperSlide>
            </LazyLoad>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecipeCarousel;
