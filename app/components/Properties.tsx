'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  description: string;
  imageUrl: string;
  beds: number;
  baths: number;
  size: string;
  owner: string;
  tags: string[];
}

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div data-aos="zoom-in" data-aos-delay="200" className="bg-white rounded-xl w-full shadow-md">
      <div
        className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
        style={{ backgroundImage: `url(${property.imageUrl})` }}
      >
        <div className="flex justify-between items-end w-full">
          <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
            Featured
          </button>
          <div className="flex gap-2">
            {property.tags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 text-white">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 384 512" className="w-4 h-4">
            <path d="M172.3 501.7C26.97 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-26.97 99-172.3 309.7a24 24 0 0 1-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z" />
          </svg>
          <span>{property.location}</span>
        </div>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-black">{property.title}</h2>
        <h3 className="text-2xl text-red-600 font-bold">{property.price}</h3>
        <p className="text-gray-700">{property.description}</p>
        <div className="flex gap-4 mt-3 text-red-500 text-sm">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.size}</span>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-4" />
        <div className="flex gap-2 items-center text-black">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" className="w-5 h-5 text-red-400">
            <path d="M248 8C111 8 0 119 0 256c0 110.3 71.4 203.8 170.3 236.6 12.5 2.3 17.1-5.4 17.1-12v-44c-69.3 15-83.9-33.4-83.9-33.4-11.4-28.9-27.9-36.6-27.9-36.6-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.8 27.3 73.2 20.9 2.3-16.2 8.8-27.3 16-33.6-55.3-6.3-113.4-27.6-113.4-122.9 0-27.1 9.7-49.2 25.6-66.5-2.6-6.3-11.1-31.8 2.4-66.3 0 0 20.9-6.7 68.4 25.4 19.9-5.5 41.3-8.2 62.6-8.3 21.3.1 42.7 2.8 62.6 8.3 47.4-32.1 68.3-25.4 68.3-25.4 13.6 34.5 5.1 60 2.5 66.3 15.9 17.3 25.5 39.4 25.5 66.5 0 95.5-58.2 116.5-113.7 122.7 9.1 7.8 17.3 23.2 17.3 46.9v69.5c0 6.7 4.5 14.4 17.2 12C424.6 459.7 496 366.2 496 256 496 119 385 8 248 8z" />
          </svg>
          <span>{property.owner}</span>
        </div>
      </div>
    </div>
  );
};

export default function Properties() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const properties: Property[] = [
    {
      id: 1,
      title: 'Villa with Amazing View',
      price: '$213.23',
      location: 'Downtown, Las Vegas',
      description: 'Beautiful, updated, ground level Co-op apartment.',
      imageUrl: '/prop1.webp',
      beds: 3,
      baths: 4,
      size: '250 sq ft',
      owner: 'Alice Adams',
      tags: ['Sales', 'Active']
    },
    {
      id: 2,
      title: 'Modern Apartment in City Center',
      price: '$312.99',
      location: 'Manhattan, NY',
      description: 'Luxury apartment with smart features.',
      imageUrl: '/prop2.webp',
      beds: 2,
      baths: 2,
      size: '200 sq ft',
      owner: 'Bob Smith',
      tags: ['Rent', 'New']
    },
    {
      id: 3,
      title: 'Countryside Family House',
      price: '$420.50',
      location: 'Austin, TX',
      description: 'Spacious house with large backyard.',
      imageUrl: '/prop3.webp',
      beds: 4,
      baths: 3,
      size: '350 sq ft',
      owner: 'Cathy Brown',
      tags: ['Sale', 'Hot']
    },
    {
      id: 4,
      title: 'Beachfront Bungalow',
      price: '$499.00',
      location: 'Miami, FL',
      description: 'Enjoy sunrise every day on the beach.',
      imageUrl: '/prop4.webp',
      beds: 3,
      baths: 2,
      size: '300 sq ft',
      owner: 'David Green',
      tags: ['Sale', 'Featured']
    },
    {
      id: 5,
      title: 'Luxury Condo',
      price: '$789.00',
      location: 'San Diego, CA',
      description: 'Top-floor luxury condo with city view.',
      imageUrl: '/prop5.webp',
      beds: 2,
      baths: 2,
      size: '275 sq ft',
      owner: 'Ella Blue',
      tags: ['Rent', 'Luxury']
    },
    {
      id: 6,
      title: 'Urban Studio',
      price: '$199.99',
      location: 'Chicago, IL',
      description: 'Compact studio for minimalist lifestyle.',
      imageUrl: '/prop6.webp',
      beds: 1,
      baths: 1,
      size: '150 sq ft',
      owner: 'Frank White',
      tags: ['Rent', 'Budget']
    }
  ];

  return (
    <div className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col gap-4 mb-10">
        <h1 data-aos="zoom-in" className="text-red-500 text-sm font-medium">PROPERTIES</h1>
        <h2 data-aos="zoom-in" className="text-4xl font-semibold text-black">
          Explore the latest<br />properties available
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>






<div className="flex justify-center mt-10">
  <button
    data-aos="zoom-in"
    data-aos-delay="400"
    className="bg-red-600 text-md px-10 py-3 text-white font-semibold rounded-xl hover:bg-black cursor-pointer"
  >
    LOAD MORE
  </button>
</div>









    </div>
  );
}
