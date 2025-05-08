"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [location, setLocation] = useState<string>("Las Vegas, Nevada");
  const [type, setType] = useState<string>("Rentals");
  const [category, setCategory] = useState<string>("Apartment");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = {
        location,
        type,
        category,
      };

      // Save to localStorage
      localStorage.setItem("propertyFormData", JSON.stringify(formData));
      alert("Data saved to Local Storage successfully!");
    } catch (error) {
      console.error("Error saving to Local Storage:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="light bg-white">
      <section
        id="home"
        className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
        style={{ backgroundImage: 'url("/hero1.webp")' }}
      >
        <div className="relative z-10 text-center px-4 mt-40">
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next home in Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </div>

        {/* Form Section */}
        <div
          className="light bg-transparent z-10 mt-10 transition-opacity duration-700 ease-in opacity-100"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <form
            id="form"
            onSubmit={handleSubmit}
            className="light bg-white lg:w-[100%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl"
          >
            {/* Location Input */}
            <div className="w-full" data-aos="fade-up">
              <label htmlFor="location" className="text-black font-semibold">
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-black"
              />
            </div>

            {/* Type Select */}
            <div className="w-full" data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="type" className="text-black font-semibold">
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              >
                <option key="rentals" value="Rentals">
                  Rentals
                </option>
                <option key="sales" value="Sales">
                  Sales
                </option>
                <option key="commercials" value="Commercials">
                  Commercials
                </option>
              </select>
            </div>

            {/* Category Select */}
            <div className="w-full" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="category" className="text-black font-semibold">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
              >
                {["Apartment", "Duplex", "Condos", "Houses", "Villas"].map(
                  (cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Submit Button */}
            <div className="w-full" data-aos="fade-up" data-aos-delay="300">
              <button
                type="submit"
                className="bg-red-600 hover:bg-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
