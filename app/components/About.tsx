"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="bg-white w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      <div>
        <img
          src="/about.jpg"
          alt="About section image"
          data-aos="zoom-in"
          className="w-full rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>

      <div>
        <h1 data-aos="zoom-in" className="text-red-500 aos-init">WHO WE ARE</h1>
        <h1 data-aos="zoom-in" data-aos-delay="200" className="text-black text-[40px] font-semibold leading-10 aos-init">We help clients buy and Sell houses since 1989</h1>
        <p data-aos = "zoom-in" data-aos-delay="400" className="text-xl text-gray-600 text-justify aos-init">

        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam eaque inventore voluptatum rem consectetur quae magni optio quis incidunt?

        </p>

        <button data-aos = "zoom-in" data-aos-delay="600"
        className="bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black cursor-pointer transform-hover:scale-105 transition-transform-duration-300 aos-init">
          VIEW MORE
        </button>


        
      </div>
    </section>

  
  );
  







  
}
