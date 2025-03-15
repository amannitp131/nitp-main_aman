"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";


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

export function SocialHandles() {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    const handleKeyDown = (e) => {
      if (!popupImage) return;
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPreviousImage();
      if (e.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [popupImage]);

  const openPopup = (index) => {
    setPopupImage(images[index]);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImage(null);
    setCurrentIndex(null);
  };

  const showNextImage = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % images.length;
      setPopupImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  }, [currentIndex]);

  const showPreviousImage = useCallback(() => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setPopupImage(images[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 md:p-20 h-full">
      <div className="w-full md:w-2/5 bg-white p-6 border rounded-md dark:border-gray-800 shadow-lg overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">View our Social Media</h2>
        <div className="flex flex-col gap-4">
          <a
            className="twitter-timeline"
            data-lang="en"
            data-height="350"
            href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw"
          >
            Tweets by NIT Patna
          </a>
          <a
            className="twitter-timeline"
            data-lang="en"
            data-height="350"
            href="https://twitter.com/EduMinOfIndia?ref_src=twsrc%5Etfw"
          >
            Tweets by Education Ministry Of India
          </a>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">NIT Patna Glimpses</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
          {images.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group aspect-[4/3] shadow-md"
              
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openPopup(index)}
                  className="text-white font-medium px-4 py-2 bg-gray-900 rounded-lg"
                >
                  View Image
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href="/Gallery"
            className="inline-flex items-center px-6 py-3 text-white bg-[#421010] rounded-lg hover:bg-[#8b1d1d] transition duration-300"
            prefetch={false}
          >
            <GalleryThumbnailsIcon className="w-5 h-5 mr-2" />
            View All Images
          </Link>
        </div>
      </div>
      {popupImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[1000]">
          <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
            <button
              className="absolute right-4 top-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition hover:shadow-lg z-[10000]"
              onClick={closePopup}
            >
              ✖
            </button>
            <div className="relative flex-1 flex items-center justify-center p-4">
              <button
                className="absolute left-4 text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700"
                onClick={showPreviousImage}
              >
                ◀
              </button>
              <img
                src={images[currentIndex]}
                alt="Full view"
                className="w-full h-[500px] object-contain rounded-md"
              />
              <button
                className="absolute right-4 text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700"
                onClick={showNextImage}
              >
                ▶
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-b-lg flex gap-2 overflow-x-auto">
              {images.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => openPopup(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden ${
                    currentIndex === idx ? "ring-2 ring-[#421010]" : ""
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialHandles;
function GalleryThumbnailsIcon(props) {
  return <span {...props}>🖼️</span>;
}
