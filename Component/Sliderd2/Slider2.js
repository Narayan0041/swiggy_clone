
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { foodCategory } from "../Data/FoodCategory";

function Responsive() {
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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let foodCategoryData =foodCategory
  let foodCategoryDataReturn= foodCategoryData.map((data,index)=>{
    return(
      <div key={index} className="mt-2 inline-block ml-[7rem]">
        <img src={data.image} width={140} height={140} alt="bri" className="rounded-lg "/>
        {/* <h1 className="text-gray-700 text-2xl font-bold">{data.name}</h1> */}
    </div>
    )
   })
  return (
    <div className="slider-container">
        <h1 className="font-bold text-2xl mt-9 ml-12">What's on your mind?</h1>
      <Slider {...settings}>
       {
        
        foodCategoryDataReturn
       }
      </Slider>
    </div>
  );
}

export default Responsive;

