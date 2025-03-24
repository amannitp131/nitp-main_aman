// // src/app/Student/Clubs/page.js
// "use client";
// import React, { useState, useEffect } from 'react';
// import { sliderData } from './sliderdata';
// import './style.css';

// export default function ClubsSocieties() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = sliderData.length;

//   useEffect(() => {
//     const autoPlay = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, 25000); // Change slide every 25 seconds

//     return () => clearInterval(autoPlay); // Cleanup on unmount
//   }, [totalSlides]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className="min-h-screen bg-white bg-opacity-50">
//       <div className="mx-auto px-4 py-8 max-w-7xl">
//         <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
//           Clubs & Societies
//         </h1>
        
//         <div className="slider-container">
//           <div className="slider mx-auto">
//             <img 
//               src={sliderData[currentIndex].image}
//               alt={`Slide ${currentIndex + 1}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="text-overlay">
//               <h2 className="text-2xl pt-4 text-red-800 font-extrabold">{sliderData[currentIndex].heading}</h2>
//               <p className="text-sm md:text-lg pt-5 md:pt-8 text-neutral-700">{sliderData[currentIndex].description}</p>
//             </div>
//           </div>

//           <button className="prev" onClick={prevSlide}>❮</button>
//           <button className="next" onClick={nextSlide}>❯</button>
//         </div>
        
//         <div className="mt-12 bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4 text-red-900">About Clubs & Societies</h2>
//           <p className="text-gray-700 mb-4">
//             The student community at NIT Patna is actively engaged in various clubs and societies that cater to different interests and talents. These clubs provide a platform for students to explore their passions, develop new skills, and build lasting friendships.
//           </p>
//           <p className="text-gray-700 mb-4">
//             The institute encourages students to participate in these extracurricular activities to ensure holistic development alongside academic excellence. Each club is managed by student coordinators under the guidance of faculty advisors.
//           </p>
          
//           <h3 className="text-lg font-bold mt-6 mb-3 text-red-800">Categories of Clubs & Societies</h3>
//           <ul className="list-disc pl-6 text-gray-700 space-y-2">
//             <li>Technical Clubs</li>
//             <li>Cultural Clubs</li>
//             <li>Sports Clubs</li>
//             <li>Literary & Debating Societies</li>
//             <li>Social Service Organizations</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/students/Clubs/page.js
"use client";
import React, { useState, useEffect } from 'react';
import { sliderData } from './sliderdata';
import './style.css';

export default function ClubsSocieties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 25000); // Change slide every 25 seconds

    return () => clearInterval(autoPlay); // Cleanup on unmount
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-red-800 py-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
          Clubs & Societies
        </h1>
      </div>

      <div className="mx-auto px-4 py-4 max-w-7xl">
        <div className="slider-container mb-12 shadow-lg">
          <div className="slider mx-auto">
            <img 
              src={sliderData[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="text-overlay">
              <h2 className="text-2xl pt-4 text-red-800 font-extrabold">{sliderData[currentIndex].heading}</h2>
              <p className="text-sm md:text-lg pt-3 md:pt-5 text-neutral-700">{sliderData[currentIndex].description}</p>
            </div>
          </div>

          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-800">
            <h2 className="text-xl font-bold mb-4 text-red-800">Technical Clubs</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> HackSlash</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Robotics Club</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Incubation Centre</li>
              
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-800">
            <h2 className="text-xl font-bold mb-4 text-red-800">Cultural Clubs</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Music Club</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Dance Club</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Saptak</li>
            
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-800">
            <h2 className="text-xl font-bold mb-4 text-red-800">Literary & Social</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Expresso</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> Vista</li>
              <li className="flex items-center"><span className="mr-2 text-red-800">•</span> GYB</li>
              
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-red-800">Club Registration</h2>
          <p className="text-gray-700 mb-6">
            Students interested in joining any club can register during the club registration drive held at the beginning of each academic year. For any queries related to clubs and societies, please contact the Student Activity Center.
          </p>
          <a href="#" className="inline-flex items-center bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium">
            Contact Student Coordinator
          </a>
        </div>
      </div>
    </div>
  );
}