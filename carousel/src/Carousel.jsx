import React, { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextSlide = () => {
    if (currentImage == images.length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const prevSlide = () => {
    if (currentImage == 0) {
      setCurrentImage(images.length - 1)
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  const handleIndicator = (index) => {
    setCurrentImage(index);
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl m-2 p-2">Carousel</h2>
      <div className="flex w-[350px] h-96 relative">
        <img
          className="w-full h-full object-cover"
          src={images[currentImage]}
          alt={images[currentImage]}
        />
        {/* Navigation Buttons */}
        <span
          onClick={prevSlide}
          className="absolute hover:cursor-pointer text-white border border-gray-500 rounded-full shadow-md top-1/2 left-2"
        >
          <FaArrowCircleLeft className="" size={34} />
        </span>
        <span
          onClick={nextSlide}
          className="absolute hover:cursor-pointer  text-white border border-gray-500 rounded-full shadow-md top-1/2 right-2"
        >
          <FaArrowCircleRight size={34} />
        </span>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicator(index)}
              className={`w-3 h-3 mx-1 hover:cursor-pointer ${
                currentImage == index ? "bg-white" : "bg-gray-400"
              } rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
