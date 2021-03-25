import React from "react";
import RecipeCard from "../recipe-card/RecipeCard";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../components/spinner/Spinner";
import "./recipe-carousel.styles.scss";
import "swiper/components/navigation/navigation.scss";
import "../../../node_modules/swiper/swiper-bundle.css";
SwiperCore.use([Navigation]);

const RecipeCarousel = ({ recipes, loading }) => {
  return (
    <div className="carousel">
      <Swiper spaceBetween={0} slidesPerView={1} navigation>
        {recipes.map((recipe, index) =>
          loading ? (
            <Spinner key={index} />
          ) : (
            <SwiperSlide key={index}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default RecipeCarousel;
