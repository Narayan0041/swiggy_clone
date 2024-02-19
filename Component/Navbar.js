// import React from 'react';
// import Image from "next/image";

// export default function Navbar() {
//   const [showBox, setShowBox] = useState(false);

//   const toggleBox = () => {
//     setShowBox(!showBox);
//   };

//   return (
//     <>
//       {/* navbar start */}
//       <div className="flex justify-around items-center w-full px-40 p-2">
//         <div className="flex justify-between items-center w-full">
//           <div className="m-1">
//             <Image src="/asset/swiggy.png" width={140} height={140} />
//           </div>
//           <div className="text-gray-200">|</div>
//           <div className="flex justify-between items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="currentColor"
//               className="bi bi-send-arrow-up-fill text-orange-500"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"
//               />
//             </svg>
//             <p className="ml-3 cursor-pointer" onClick={toggleBox}>
//               Setup your precise location
//             </p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="currentColor"
//               className="bi bi-arrow-down-short text-orange-500"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
//               />
//             </svg>
//           </div>
//           <div className={showBox ? "d" : "d hidden"}> {/* Toggle display based on showBox state */}
//             <div>
//               <p>Hello</p>
//             </div>
//           </div>
//           <div></div>
//         </div>

//         {/* // second child */}
//         <div className=" flex justify-between items-center w-full ml-12 rounded-xl">
//           <div className="flex justify-between items-center bg-gray-200 w-full rounded-lg">
//             <div className=" flex w-full pl-8">
//               <input
//                 type="text"
//                 placeholder="Search for restaurant and food"
//                 id="food-and-restaurant"
//                 className=" py-4 pr-2 bg-transparent w-full focus:outline-none "
//               />
//             </div>
//             <div className="flex items-center pr-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-search"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//               </svg>
//             </div>
//           </div>
//           <div className="ml-8">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               fill="currentColor"
//               className="bi bi-person-circle"
//               viewBox="0 0 16 16"
//             >
//               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//               <path
//                 fillRule="evenodd"
//                 d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//       {/* navbar end here */}
//       <hr></hr>
//       {/* <div className="w-full bg-gray-500 h"></div> */}
//       {/* ///// herosection start */}

//       <div
//         className="flex justify-between items-center "
//         style={{
//           background:
//             "linear-gradient(0deg, rgb(201, 188, 244) 0%, rgb(255, 255, 255) 95.83%)",
//           borderBottomLeftRadius: "2rem",
//           borderBottomRightRadius: "2rem",
//         }}
//       >
//         <div className="w-1/2 pl-52 ">
//           <h1 className="text-5xl font-extrabold leading-tight  antialiased text-gray-800 w-96">
//             Order food Online in Mumbai
//           </h1>
//         <div className="w-1/3">
//           <svg
//             width="100%"
//             height="100%"
//             viewBox="0 0 78 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
//               stroke="#F15700"
//               strokeWidth="1.5"
//             ></path>
//           </svg>
//         </div>
//         </div>
//         {/* //second child start from here */}
//         <div className="w-1/2 pl-20">
//           <img
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
//             alt="food-hero-image"
//             className="w-10/12"
//           ></img>
//         </div>
//       </div>

//       {/* first Slider all the food Category */}
//       {/* <Slider/> */}
//     </>
//   );
// }
