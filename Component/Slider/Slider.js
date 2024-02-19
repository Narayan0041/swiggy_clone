"use client";
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import  style from './style.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {

 async function fetchData(){
  const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1608a50damsh5bcbf9e406e9f18p1bb20ejsnfdbf701c35a5',
		'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  }

useEffect(()=>{
fetchData();
},[])
  
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        loop={false}
        pagination={{
          clickable: true,
        } }
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
