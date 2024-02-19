import React from 'react';

export default function DifferentLocationTabs({ data }) {
  let dataInArray = data.map((item, index) => {
    return (
      <div className='border-[1px] border-gray-300 pl-[5rem] pr-[5rem] pt-[.7rem] pb-[.7rem] inline-block rounded-xl ml-[2rem] mt-[1rem] w-[20rem]' key={index}>
        <h1>{item}</h1>
      </div>
    );
  });

  return dataInArray; // Return the array directly
}

