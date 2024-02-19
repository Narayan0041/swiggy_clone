"use client"
import Image from "next/image";
import React,{useState} from "react";

export default function Footer() {
  const [showCity ,setShowCity] =useState(false);

  const showAllCity =()=>{
console.log("click")
  }
  return (
    <>
      {/* Footer Upar Section */}
      <div className="flex justify-around  bg-gray-100 pl-[5%] mt-[8rem] pt-[1rem] pb-[1rem]">
        <div className="font-extrabold w-[100%] ml-[5rem] pl-[3rem]">
          <h1 className="text-gray-700 text-[25px]">
            For better experience,download the Swiggy app now
          </h1>
        </div>
        <div className="flex justify-between items-center pr-[18%] ml-[10%]">
          <div className="mr-[4rem]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt=""
              width={550}
            />
          </div>
          <div>
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt=""
              width={550}
            />
          </div>
        </div>
      </div>

      {/* Footer LastSection Start */}

      <div
        className="flex justify-around items-center bg-black/10  w-full  pl-[5rem] pr-[20rem] text-white pb-[7rem] relative"
        style={{ background: "black" }}
      >
        <div className="">
          <Image src="/asset/logoInWhite.png" width={140} height={140} />
          <p className="text-white text-center">
            &copy; 2023 Bundl Technologies Pvt. Ltd
          </p>
        </div>
        <div>
          <p className="cursor-pointer leading-[3rem] pt-[.5rem] font-extrabold mb-1">
            Company
          </p>
          <ul className="text-gray-300 text-[1rem]">
            <li className="cursor-pointer leading-10">About</li>
            <li className="cursor-pointer leading-10">Careers</li>
            <li className="cursor-pointer leading-10">Team</li>
            <li className="cursor-pointer leading-10">Swiggy One</li>
            <li className="cursor-pointer leading-10">Swiggy Instamart</li>
            <li className="cursor-pointer leading-10">Swiggy Genie</li>
          </ul>
        </div>
        <div>
          <p className="text-white pt-[4.9rem] font-extrabold">Contact us </p>
          <ul className="text-gray-300 text-[1rem]">
            <li className="cursor-pointer leading-10 pt-2">Help & Support</li>
            <li className="cursor-pointer leading-10">Partner with us</li>
            <li className="cursor-pointer leading-10">Ride with us</li>
          </ul>
          <p className="text-white pt-[2rem] pb-[.8rem]">Legal </p>
          <ul className="text-gray-300 text-[1rem] mt-1">
            <li className="cursor-pointer leading-10">Terms & Conditions</li>
            <li className="cursor-pointer leading-10">Cookie Policy</li>
            <li className="cursor-pointer leading-10">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-extrabold">We deliver to:</p>
          <ul className="text-gray-300 text-[1rem] mt-1">
            <li className="cursor-pointer leading-10">Bangalore</li>
            <li className="cursor-pointer leading-10">Gurgoan</li>
            <li className="cursor-pointer leading-10">Hyderabad</li>
            <li className="cursor-pointer leading-10">Delhi</li>
            <li className="cursor-pointer leading-10">Mumbai</li>
            <li className="cursor-pointer leading-10">Pune</li>
            </ul>
            <div onClick={showAllCity} >
              <ul>
                <li>Kolkata</li>
                <li>Chennai</li>
                <li>Ahmedabad</li>
                <li>Chandigarh</li>
                <li>Jaipur</li>
                <li>Kochi</li>
                <li>Coimbatore</li>
                <li>Lucknow</li>
                <li>Nagpur</li>
                <li>Vadodara</li>
                <li>Indore</li>
                <li>Guwahati</li>
                <li>Vizag</li>
                <li>Surat</li>
                <li>Dehradun</li>
                <li>Noida</li>
                <li>Ludhiana</li>
                <li>Trichy</li>
                <li>Vijayawada</li>
                <li>Kanpur</li>
                <li>Mysore</li>
                <li>Nashik</li>
                <li>Udaipur</li>
                <li>Pondicherry</li>
                <li>Agra</li>
                <li>Aurangabad</li>
                <li>Jalandhar</li>
                <li>Kota</li>
                <li>Madurai</li>
                <li>Allahabad</li>
                <li>Manipal</li>
                <li>Amritsar</li>
                <li>Bareilly</li>
                <li>Meerut</li>
                <li>Bhopal</li>
                <li>Ooty</li>
                <li>Bhubaneswar</li>
                <li>Raipur</li>
                <li>Bikaner</li>
                <li>Rajkot</li>
                <li>Kozhikode</li>
                <li>Central Goa</li>
                <li>Sirsa</li>
                <li>Gwalior</li>
                <li>Thrissur</li>
                <li>Kharagpur</li>
                <li>Tirupati</li>
                <li>Tirupur</li>
                <li>Vellore</li>
                <li>Thiruvananthapuram</li>
                <li>Warangal</li>
                <li>Varanasi</li>
                <li>Mangaluru</li>
                <li>Patna</li>
                <li>Ranchi</li>
                <li>Faridabad</li>
                <li>Guntur</li>
                <li>Ujjain</li>
                <li>Patiala</li>
                <li>Karnal</li>
                <li>Kakinada</li>
                <li>Rajahmundry</li>
                <li>Bilaspur</li>
                <li>Bhilai</li>
                <li>Anand</li>
                <li>Bhavnagar</li>
                <li>Jammu</li>
                <li>Muktsar</li>
                <li>Panipat</li>
                <li>Dhanbad</li>
                <li>Hubli</li>
                <li>Belgaum</li>
                <li>Jabalpur</li>
                <li>Kolhapur</li>
                <li>Solapur</li>
                <li>Shillong</li>
                <li>Cuttack</li>
                <li>Aligarh</li>
                <li>Salem</li>
                <li>Jodhpur</li>
                <li>Ajmer</li>
                <li>Jhansi</li>
                <li>Gorakhpur</li>
                <li>Thanjavur</li>
                <li>Erode</li>
                <li>Nellore</li>
                <li>Rourkela</li>
                <li>Anantapur</li>
                <li>Kurnool</li>
                <li>Ahmednagar</li>
                <li>Phagwara</li>
                <li>Ambala</li>
                <li>Ballari</li>
                <li>Saharanpur</li>
                <li>Tirunelveli</li>
                <li>Bathinda</li>
                <li>Mathura</li>
                <li>Haridwar</li>
                <li>Ratnagiri</li>
                <li>Sangli</li>
                <li>Amravati</li>
                <li>Rishikesh</li>
                <li>Nagercoil</li>
                <li>KanyaKumari</li>
                <li>Kadapa</li>
                <li>Nizamabad</li>
                <li>Shivamogga</li>
                <li>Davanagere</li>
                <li>Roorkee</li>
                <li>Nanded</li>
                <li>Rewa</li>
                <li>Satna</li>
                <li>Muzaffarpur</li>
                <li>Valsad</li>
                <li>Vapi</li>
                <li>Chhapra</li>
                <li>Dharamshala</li>
                <li>Kollam</li>
                <li>Silchar</li>
                <li>Alappuzha</li>
                <li>Sonipat</li>
                <li>Rohtak</li>
                <li>Mehsana</li>
                <li>Kullu</li>
                <li>Dhule</li>
                <li>Dharwad</li>
                <li>Latur</li>
                <li>Vizianagaram</li>
                <li>Khammam</li>
                <li>Hampi</li>
                <li>Nainital</li>
                <li>Akola</li>
                <li>Kalaburagi</li>
                <li>Gaya</li>
                <li>Muzaffarnagar</li>
                <li>Dewas</li>
                <li>Korba</li>
                <li>Mussoorie</li>
                <li>Jalgaon</li>
                <li>Yamuna Nagar</li>
                <li>Bhagalpur</li>
                <li>Hapur</li>
                <li>Morena</li>
                <li>Hassan</li>
                <li>Hisar</li>
                <li>Godhra</li>
                <li>Kolar</li>
                <li>Rampur</li>
                <li>Sitapur</li>
                <li>Etawah</li>
                <li>Porbandar</li>
                <li>Nadiad</li>
                <li>Sagar</li>
                <li>Morbi</li>
                <li>Chhindwara</li>
                <li>Tumakuru</li>
                <li>Singrauli</li>
              </ul>
            </div>
        </div>
      </div>
    </>
  );
}
