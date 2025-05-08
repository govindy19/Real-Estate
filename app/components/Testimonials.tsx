'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  feedback: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Dana Gilmore",
    title: "Excellent team!",
    image: "/client1.png",
    feedback: "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication.",
    rating: 5
  },
  {
    id: 2,
    name: "John Doe",
    title: "Highly Recommended",
    image: "/client2.png",
    feedback: "Amazing experience with the team. They made the entire process smooth and easy.",
    rating: 5
  },
  {
    id: 3,
    name: "Jane Smith",
    title: "Professional Service",
    image: "/client3.png",
    feedback: "The attention to detail and commitment to finding the right property was impressive.",
    rating: 4
  },
  {
    id: 4,
    name: "Chris Evans",
    title: "Trustworthy Agency",
    image: "/client4.png",
    feedback: "Very reliable and trustworthy. I was always kept informed throughout the process.",
    rating: 5
  },
  {
    id: 5,
    name: "Sophia Brown",
    title: "Excellent Support",
    image: "/client5.png",
    feedback: "The team was always there to answer my questions and guide me through.",
    rating: 4
  },
  {
    id: 6,
    name: "Michael Lee",
    title: "Great Service",
    image: "/client6.png",
    feedback: "I am very happy with their service. They found the perfect home for me.",
    rating: 5
  }
];

const PropertyCard = ({ name, title, image, feedback, rating, delay }: Testimonial & { delay: number }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={delay}
    className="bg-white hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full"
  >
    <div className="flex justify-start items-center w-full gap-4">
      <img
        src={image}
        alt="client"
        className="w-[70px] transform hover:scale-105 transition-transform duration-300"
      />
      <div className="flex flex-col justify-center items-start gap-1">
        <h1 className="text-xl text-black font-semibold">{name}</h1>
        <h1 className="text-slate-600">{title}</h1>
      </div>
    </div>
    <p className="text-md text-justify text-slate-600">{feedback}</p>
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i}>⭐</span>
      ))}
    </div>
  </div>
);

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="light bg-gray-100">
      <section
        id="testimonials"
        className="light bg-transparent lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500">
            OUR CLIENTS
          </h1>
          <h1 data-aos="zoom-in" className="text-black text-[40px] font-semibold leading-10">
            What are our clients
            <br />
            saying about us
          </h1>
        </div>

        <div id="clients-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
          {testimonialsData.map((testimonial, index) => (
            <PropertyCard key={testimonial.id} {...testimonial} delay={index * 200} />
          ))}
        </div>
      </section>
    </div>
  );
}
