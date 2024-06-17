"use client"
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  '/assets/img/Banner1.jpg',
  '/assets/img/Banner2.jpg',
  '/assets/img/Banner3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full md:max-w-fit sm:max-w-l md:mx-20 sm:mx-auto overflow-hidden group">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 h-96 object-cover rounded-lg"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-primary  text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"
      >
        <FiChevronLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-primary  text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"
      >
        <FiChevronRight/>
      </button>
      <div className="absolute bottom-6 left-10 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

