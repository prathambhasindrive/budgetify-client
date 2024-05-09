import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "../data/testimonail.json";

const Crousal = () => {
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200">
      <div className="slider-container flex flex-col justify-center w-[90%] mx-auto px-4 py-8">
        <h2 className="text-4xl font-mono font-bold text-green-900 text-center my-4">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonialData.testimonials.map((testimonial) => (
        <div className="flex flex-col h-[250px] w-[150px] justify-center">

        <div
              key={testimonial.id}
              className="testimonials h-[90%] w-[90%]} border-2 border-white border-solid rounded-lg px-4 py-4 my-2 mx-2"
            >
              <div className="flex justify-center items-center">
                <img
                  src={testimonial.avatar}
                  alt="userImage"
                  className="h-[75px] rounded-full "
                />
                <div>
                  <div className="font-bold text-base">{testimonial.name}</div>
                  <div className="text-sm">{testimonial.occupation}</div>
                </div>
              </div>
              <div className="text-sm italic">{testimonial.comment}</div>
            </div>
        </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Crousal;
