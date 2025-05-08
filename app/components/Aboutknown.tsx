'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutknown() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stats = [
    {
      count: '5K',
      labelLine1: 'ACTIVE',
      labelLine2: 'LISTINGS',
      delay: 200,
    },
    {
      count: '9K',
      labelLine1: 'SOLID',
      labelLine2: 'LISTINGS',
      delay: 400,
    },
    {
      count: '6K',
      labelLine1: 'CLIENTS',
      labelLine2: 'WE HAVE SERVED',
      delay: 600,
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-red-100 lg:w-[95%] w-full m-auto rounded-xl flex flex-col items-center lg:px-20 px-6 py-20">
        {/* Row with heading + cards */}
        <div className="w-full grid lg:grid-cols-4 grid-cols-1 items-center gap-8">
          {/* Heading */}
          <div className="col-span-1 text-center lg:text-left">
            <h1 data-aos="zoom-in" className="text-red-500 text-lg">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-black text-[32px] lg:text-[40px] font-semibold leading-10 mt-4"
            >
              Explore most <br /> popular areas
            </h1>
          </div>

          {/* Area Cards */}
          <div className="col-span-3 grid lg:grid-cols-3 grid-cols-1 gap-6">
            {[
              { title: 'Area 1', image: '/area1.jpg', delay: 400 },
              { title: 'Area 2', image: '/area2.jpg', delay: 600 },
              { title: 'Area 3', image: '/area3.jpg', delay: 800 },
            ].map((area, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={area.delay}
                className="relative h-[400px] w-full rounded-xl bg-cover bg-center bg-no-repeat shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-xl rounded-xl">
                  {area.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-start items-start gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay={stat.delay}
              className="flex justify-center gap-8 w-full"
            >
              <h1 className="text-black text-7xl font-semibold">{stat.count}</h1>
              <h1 className="text-lg text-gray-600">
                {stat.labelLine1}
                <br />
                {stat.labelLine2}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
