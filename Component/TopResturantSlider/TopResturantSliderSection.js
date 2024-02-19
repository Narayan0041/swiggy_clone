import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import style from "./TopStyle.module.css";

function TopResturantSliderSection({TopRestaurant}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

  let foodCategoryData = TopRestaurant;
  let foodCategoryDataReturn = foodCategoryData.map((data, index) => {
    return (
      <div
        key={index}
        className={`mt-2 inline-block ml-[7rem] relative`}
      >
        <h1 className="text-2xl font-extrabold text-white absolute top-[70%] left-5 z-10">
          {data.offere !== "" ? data.offere : ""}
        </h1>
        <div
          className={`cursor-pointer transition-transform ease-linear duration-300 transform hover:scale-90 `}
        >
          <img
            src={data.image}
            width={250}
            height={50}
            alt="bri"
            className={`${style.overlay_image} rounded-lg`}
          />
          <h1 className=" mt-4 text-[1.1rem] font-bold">{data.itemName}</h1>
          <div className="font-bold text-[1.1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill inline-block bg-green-900 text-white p-[1px] ml-2 text-2xl mr-2   rounded-xl"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {data.rating}
          </div>
          <p className="text-gray-500">{data.address}</p>
          <p className="text-gray-500">{data.city}</p>
        </div>

        {/* <h1 className="text-gray-700 text-2xl font-bold">{data.name}</h1> */}
      </div>
    );
  });

  return (
    <div className={style.slider_container}>
      <h1 className="font-bold text-2xl mt-9 ml-12">
        Top restaurant chains in Mumbai
      </h1>
      <Slider {...settings}>{foodCategoryDataReturn}</Slider>
    </div>
  );
}

export default TopResturantSliderSection;
