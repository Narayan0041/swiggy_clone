import React from 'react';

export default function Tabs({data}) {
    const tabsList=[
        "Fast Delivery",
        "New on Swiggy",
        "Rating 4.0+",
        "Pure Veg",
        "offers",
        "$10.00-$20.00",
        "Less than $ 5"
      ]

    // Iterate over each item in the data array and create a <div> element for each
    let dataDisplay = tabsList.map((item, index) => (
        <div key={index} className='border-[lightGray] border-[1px] inline-block rounded-[1rem] pl-[1rem] pr-[1rem] pt-[.2rem] pb-[.2rem] shadow-md ml-6 cursor-pointer'>
            {item}
        </div>
    ));

    return (
        <>
        <div className='border-[lightGray] border-[1px] inline-block rounded-[1rem] pl-[1rem] pr-[1rem] pt-[.2rem] pb-[.2rem] shadow-md ml-6 cursor-pointer'>
            {data}
        </div>
            {dataDisplay}
        </>
    );
}
