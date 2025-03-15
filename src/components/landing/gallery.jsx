"use client";
import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg",
  "https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg",
  "https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg",
  "https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg",
  "https://i.postimg.cc/fyY06783/nit-patna-005.jpg",
  "https://i.postimg.cc/HLP55kJL/nit-patna-006.jpg",
  "https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg",
  "https://i.postimg.cc/pTwFGcJb/nit-patna-008.jpg",
  "https://i.postimg.cc/LssLn187/nit-patna-009.jpg",
];

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scrollGallery = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft+10 >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollGallery);
    };

    if (isHovered === null) {
      animationFrameId = requestAnimationFrame(scrollGallery);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center xl:justify-between items-center w-full h-[60vh] px-6 rounded-3xl">
      <div
        className="w-1/6 h-full rounded-lg shadow-md bg-cover bg-center hidden xl:flex"
        style={{
          backgroundImage: `url("https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg")`,
        }}
      ></div>
      <div
        ref={scrollRef}
        className="relative w-3/5 overflow-hidden whitespace-nowrap rounded-lg shadow-lg flex items-center bg-gray-200"
      >
        <div className="flex space-x-4 p-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[250px] flex-shrink-0 cursor-pointer"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => openModal(index)}
            >
              <img
                src={img}
                alt={`Gallery Image ${index}`}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
              {isHovered === index && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold rounded-md transition-opacity duration-300">
                  View Image
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-1/6 h-full rounded-lg shadow-md bg-cover bg-center hidden xl:flex"
        style={{
          backgroundImage: `url("https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg")`,
        }}
      ></div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999] p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-3xl text-gray-800 hover:text-red-600 transition"
            >
              &times;
            </button>
            <div className="flex items-center justify-center relative">
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 text-3xl text-black hover:text-gray-600"
              >
                ❮
              </button>
              <img
                src={images[currentIndex]}
                alt="Full view"
                className="w-full h-[500px] object-contain rounded-md"
              />
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                className="absolute right-4 text-3xl text-black hover:text-gray-600"
              >
                ❯
              </button>
            </div>
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  className={`w-16 h-16 object-cover cursor-pointer rounded-md border-2 transition-transform duration-300 ${
                    currentIndex === index
                      ? "border-blue-500 scale-110 ring-4 ring-rose-600"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
