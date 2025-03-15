"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  "https://patnapress.com/wp-content/uploads/2024/12/NIT-Bihta.jpeg",
  "https://i.postimg.cc/J42hsCPZ/2-scientist.png",
  "https://i.postimg.cc/vZgyyTkp/image.png",
  "https://i.postimg.cc/0jDVqSGQ/Image-1-00001.jpg",
  "https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg",
  "https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg",
  "https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg",
  "https://i.postimg.cc/fyY06783/nit-patna-005.jpg",
  "https://i.postimg.cc/sgvVmgT5/Screenshot_2024-07-31_154315.png",
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-[99vw] mx-auto"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[30vh] md:h-[530px] flex justify-center items-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[100vw] h-full  md:h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
