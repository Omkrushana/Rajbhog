import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeels } from "./TopMeels";
import CarouselItems from "./CarouselItems";

const MultipleItemCarosel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item) => (
          <CarouselItems image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarosel;
