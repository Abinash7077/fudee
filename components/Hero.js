import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
const Hero = () => {
  const imageItems = [
    "/FoodeeImages/banner5.jpg",
    "/FoodeeImages/banner6.jpg",
    "/FoodeeImages/banner7.jpg",
    "/FoodeeImages/banner4.jpg",
    "/FoodeeImages/banner5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex =
      currentImageIndex === 0 ? imageItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentImageIndex === imageItems.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="max-w-[1200px] mx-auto my-2">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold">What's New Here?</h2>
        <div className="flex gap-4">
          <span
            className="px-2 py-2 bg-gray-400 rounded-full cursor-pointer"
            onClick={goToPrevious}
          >
            <FaArrowLeft />
          </span>
          <span
            className="px-2 py-2 bg-gray-400 rounded-full cursor-pointer"
            onClick={goToNext}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      <div className="flex my-2 mb-12 divide-y w-full border-2 border-solid border-gray-400 min-h-[150px] h-[250px] max-h-[350px] overflow-hidden relative">
        <Image
          src={imageItems[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black hover:opacity-95 opacity-45">
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-[60%] h-[50%] flex items-center justify-center flex-col">
              <h3 className="text-[50px] text-white font-serif hover:text-pink-600">Fudee</h3>
              <p className="text-small text-white font-serif hover:text-blue-900">Order Your Favorite dish now.</p>
              <button className="border-2 border-solid border-blue-600 hover:bg-blue-900 hover:border-white text-white rounded-3xl mt-5 px-5 py-1">Order Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* product section */}
     
    </div>
  );
};

export default Hero;
