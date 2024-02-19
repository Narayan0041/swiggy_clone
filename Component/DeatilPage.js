"use client";
import React,{useState} from 'react'
import DifferentLocationTabs from './Common/DifferentLocationTabs';

export default function DeatilPage() {
    const initialContent = `
        The food delivery business has a strong growth curve in the market. The demand for online food order has increased immensely in the past few years, giving you absolutely no reason as to why you should miss out on them. Everybody is busy in their lives nowadays and have so little time for their everyday activities that they want immediate solutions for their problems at a reasonable price right at their doorway. With the culture of online food delivery in Mumbai gaining popularity, many restaurants are joining the digital venture with Swiggy. With so many options available, people have now become habituated to the convenience and safety that the system of food delivery in Mumbai provides, making them order food online every single time. Also, online ordering services offer enticing promotions to keep customers happy.

        Why place an order for food online in Mumbai?
        Mumbai, previously known as Bombay, is the city of dreams! Among the famous places of Mumbai, food and the festivals also top the list of the most important part of Mumbai's culture. It is a fact that every Mumbaikar is passionate and mad about food. They like to try different unique dishes, every time they step out of their houses. Mumbai is a metropolitan city and is currently the fourth most populous city in the world, a major chunk of this population migrating to Mumbai to find work in Bollywood. Needless to say, the people are so busy in their lives living in this fast city that they get no time for themselves. In this scenario, there is no other option other than ordering food online in Mumbai. When thinking to order food online in Mumbai, the most popular options are - vada pav, dabeli, aloo chat, etc. The list is never ending, especially if you are talking about Mumbai as it is known to offer an amazing experience of the food culture.

        Places to order online food in Mumbai
        With more and more restaurants of Mumbai listing themselves with Swiggy, it is becoming more and more easier to people to opt for food delivery in Mumbai. Ordering food online gives people peace of mind and make their lives easier, faster, and more convenient. Mumbai is known for its vibrant environment, festivals, food and its people. There are multiple options available for the people of Mumbai to order food online. Some of the best-known places of Mumbai to order food online are -

        R Bhagat Tarrachand, Narayan Plaza, Powai

        Malvani Touch, Hiranandani Garden, Powai.

        Frozen Bottle- Milkshakes, Desserts, And Ice cream, Thane west

        Fried Nation, Sheetal Nagar, Mira Road

        Samosa Singh, Kashmera Road, Mira Road

        Bombay Vintage, Colaba, Mumbai

        Mentioned above are just the names of a few restaurants. Mumbai is a food hub. If you ever visit Mumbai, don't forget to order food online in Mumbai from the restaurants listed on Swiggy.

        Why is Swiggy the popular food delivery option?
        Opting for online food delivery in Mumbai is currently trending among people. Earlier people had to make calls to place orders or drive to the restaurants for a take-out, and then wait for the food to be prepared and delivered. Switching to online ordering is the best solution to avoid such long wait. You can browse the menu, by sitting at the comfort of your homes. Also, you get to apply various add-on deals and offers that you restaurant must be offering. Visit Swiggy to know more about interesting offers and discounts. Eating is fun and can be an adventure, and online ordering can be part of your food-loving journey. Start ordering your food!
    `;
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    let locationArray=[
        "kharghara",
        "Andheri",
        "Ghansoli",
        "Ovali",
        "Girgaon(gilgaon)",
        "Dapoli",
        "Wanwanje",
        "Bokadvira",
        "Goregaon (East)",
        "Mulund",
        "Andheri (East)",
        "Mira Road",
        "Malad (West)",
        "Kandivali (East)",
        "Bhandup"
    ]
  return (
    <>
    <h1 className='font-extrabold text-xl mt-[3rem] ml-[10%]'>Food culture in Mumbai</h1>
    <div className='border-[1px] border-gray-300 mt-[2rem] mb-[2rem] ml-[7rem] mr-[7rem] pl-[1rem] pr-[1rem] pt-[1.5rem] pb-[1rem] rounded-2xl'>
<h1 className='text-[1.5rem] font-bold text-gray-500'>Why Choose Swiggy to Order Food Online in Mumbai?</h1>
    <div>
            {expanded ? initialContent : initialContent.slice(0, 400)}
            <div>
            <button onClick={toggleExpansion} className='text-orange-500 font-bold'>{expanded ? 'See less' : 'See more '}</button>          
            </div>
        </div>
    </div>

    {/* Explore localities in and around Mumbai Section */}
    <div className='ml-[5rem] mr-[5rem]'>
        <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'>Restaurant Chains in Mumbai</h1>
    <DifferentLocationTabs data={locationArray}/>

    {/* What's Mumbai eating! People ordering in Mumbai */}

        <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'>
What's Mumbai eating! People ordering in Mumbai</h1>
    <DifferentLocationTabs data={locationArray}/>

    {/* Restaurant Chains in Mumbai */}
    <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'>Restaurant Chains in Mumbai</h1>
    <DifferentLocationTabs data={locationArray}/>

    {/* Popular Dishes in Mumbai */}
    <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'>Popular Dishes in Mumbai
</h1 >
    <DifferentLocationTabs data={locationArray}/>

    {/* More Food Options Near Me */}
    <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'> More Food Options Near Me</h1>
    <DifferentLocationTabs data={locationArray}/>

    {/* Popular Dishes in Mumbai  */}
    <h1 className='font-extrabold text-[1.2rem] ml-[5%] mt-[2rem]'> More Food Options Near Me</h1> 
    <DifferentLocationTabs data={locationArray}/>
    </div>
    </>
  )
}
