"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(()=>{
    AOS.init({duration:1000});

  })

  return (
    <footer className="light bg-gray-800 w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-content items-start lg:gap-20 gap-10 ">

      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className="text-white text-2xl font-semibold">
          About Us
        </h1>
        <p className="text-slate-200 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?

        </p>
        <div id="social-icons"
        className="flex  justify-start items-center gap-4 mt-4">
          <div className="p-3 rounded-xl  hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300  flex ">
            <img src='/facebook.jpeg'
            alt="facebook"
            className="w-12"
            />
            <img src='/instagram.jpeg'
            alt="instagram"
            className="w-9 gap-12"
            />
            <img src='twitter.png'
            alt="twitter"
            className="w-10"
            />
            <img src='youtube.png'
            alt="youtube"
            className="w-10 gap-10"
            />
           

          </div>
          




        </div>
        <div className="flex flex-col">
            <h1>Copyright Real Estate, All Rights Reserved</h1>
          </div>



      </div>


      <div className="flex flex-col justify-center items-start gap-5">
        <h1 className="text-white text-2xl font-semibold">Contact Us</h1>

        <div className="flex flex-col justify-center items-center gap-3 ">
          <p className="text-slate-200"> Address: 10845 Griffith Peak Dr, Las Vegas, NV 89135</p>

          <p className="text-slate-200  px-10 "> Phone Number : +91 879 098 8901</p>
          <p className="text-slate-200"> Gmail:office23@gmail.com</p>

         




        </div>


      </div>

<div className="flex flex-col justify-center items-start ">
  <h1 className="text-white text-2xl font-semibold">Latest Properties</h1>

  <div className="flex justify-center items-center gap-4">
    <img
    src='/prop7.jpg'
    className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
    />
    <div>
    <h1 className="text-lg text-white">Villa with amazing view</h1>
    
    
    <p className="text-slate-400">$ 278.98</p>
    </div>

    
  
  </div>
  
  <div className="flex justify-center items-center gap-4 mt-8">
    <img
    src='/prop8.jpg'
    className="w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300"
    />
    <div>
    <h1 className="text-lg text-white">Sea View Villa</h1>
    
    
    <p className="text-slate-400">$ 789.23</p>
    </div>

    
  
  </div>







</div>

      

      





    </footer>
  
      
    
  )
}
