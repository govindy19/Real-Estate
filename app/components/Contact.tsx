"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_n7uioca"; // replace with your EmailJS service ID
    const templateID = "template_9ed1ovu"; // replace with your EmailJS template ID
    const userID = "L0AS-Hag4hpdU3_hx"; // replace with your EmailJS user ID

    // Sending email
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send the email. Please try again later.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="light bg-white pb-20">
      <section
        id="contact"
        className="light bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10 "
      >
        <form
          onSubmit={handleSubmit}
          data-aos="zoom-in"
          className="bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2xl text-black font-semibold ">
            Send us a message today
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl text-black"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            cols={30}
            rows={5}
            placeholder="Enter your message here..."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl text-black"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer"
          >
            SEND EMAIL
          </button>
        </form>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10"
          >
            Get in touch with us today and our team will assist you
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify"
          >
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="800"
            className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer"
          >
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
}
