import React from 'react';
import style from "../TopResturantSlider/TopStyle.module.css";
import Tabs from '../Common/Tabs';

export default function DisplayFood({ OnlineResturantData }) {
  let onlineResturant = OnlineResturantData;

  let onlineResturantDataReturn = onlineResturant.map((data, index) => {
    return (
      <div
        key={index}
        className={`mt-5 inline-block ml-[7rem] relative`}
      >
        <h1 className="text-2xl font-extrabold text-white absolute top-[70%] left-5 z-10">
          {data.offere !== "" ? data.offere : ""}
        </h1>
        <div
          className={`cursor-pointer transition-transform ease-linear duration-300 transform hover:scale-90 `}
        >
          <img
            src={data.image}
            width={200}
            alt="bri"
            className={`${style.overlay_image} rounded-lg`}
          />
          <h1 className="mt-4 text-[1.1rem] font-bold">{data.itemName}</h1>
          <div className="font-bold text-[1.1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill inline-block bg-green-900 text-white p-[1px] ml-2 text-2xl mr-2   rounded-xl"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {data.rating}
          </div>
          <p className="text-gray-500">{data.address}</p>
          <p className="text-gray-500">{data.city}</p>
        </div>
      </div>
    );
  });

  const tabsData = (
    <>
      <span>Filter</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter inline-block ml-3" viewBox="0 0 16 16">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
      </svg>
    </>
  );

 
  
  return (
    <>
      <h1 className='font-bold text-3xl mt-9 ml-12'>Restaurants with online food delivery in Mumbai</h1>
      <div className='pl-[10%] mt-4'>
      <Tabs data={tabsData}/>  
    </div>
      {onlineResturantDataReturn}
    </>
  );
}
