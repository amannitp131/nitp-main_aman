// import Head from "next/head";
// import Sidebar from ".././components/Sidebar";
// import Carousel from ".././components/Carousel";

// export default function Home() {
//   const  text = `
//     The institute IT Service Unit is equipped with most modern and advanced infrastructure to provide services to cater to the computing and networking needs of the of the institute. In addition to providing IT Solution, this units taking care of existing entire campus network (offices as well residential flats), Institute Servers, Web Server and other IT services like Mail, Webserver to meet the academic requirements and research purpose. High speed and uninterrupted Internet access is provide across the campus through 1-Gbps internet connectivity by POWERGRID & 1-Gbps through NKN.
    
//     Facilities : 
//     1 .	High Speed Wi-Fi & Wired Internet Connectivity
//     2 . CCTV surveillance system
//     3	. Bio Matric Authentication Devices
//     4 . IP Phones through ready Network
//     5 . EPBAX
//     `;
//   return (
    

//     <div className="flex flex-col md:flex-row px-4 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8">
//       <div className="mt-6 mb-12 md:mt-0 ">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col md:w-3/4 ">
//         <div>
//           <span className="text-xl  font-semibold border-b-2 pb-2 border-red-800">
//           IT Services Unit
//           </span>
//         </div>
//         <div className="mt-8 md:w-full">
//           <Carousel />
//         </div>
//         <div className="mt-8 text-base text-gray-500 mx-4">
//         <p className="text-gray-600 "> {text.split('\n').map((line, i) => (
//                       <span key={i}>
//                         {line}
//                         <br />
//                       </span>
//                     ))}</p>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export async function generateMetadata({ params }) {
//   return {
//     title: "IT Services Unit | NIT Patna",
//   };
// }






import Head from "next/head";
import Sidebar from ".././components/Sidebar";
import Carousel from ".././components/Carousel";

export default function Home() {
  const text = `
    The institute IT Service Unit is equipped with most modern and advanced infrastructure to provide services to cater to the computing and networking needs of the institute. In addition to providing IT Solution, this unit takes care of the existing entire campus network (offices as well as residential flats), Institute Servers, Web Server, and other IT services like Mail, Webserver to meet academic requirements and research purposes. High-speed and uninterrupted Internet access is provided across the campus through 1-Gbps internet connectivity by POWERGRID & 1-Gbps through NKN.
    
    Facilities: 
    1. High-Speed Wi-Fi & Wired Internet Connectivity
    2. CCTV Surveillance System
    3. Biometric Authentication Devices
    4. IP Phones through Ready Network
    5. EPBAX
  `;

  return (
    <div className="flex flex-row px-4 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-4 w-full mb-8">
      {/* Sidebar - Stays on Extreme Left */}
      <div className="mt-6 mb-12 md:mt-0">
        <Sidebar />
      </div>

      {/* Right-Side Content */}
      <div className="flex flex-col md:w-3/4">
        <div>
          <span className="text-xl font-semibold border-b-2 pb-2 border-red-800">
            IT Services Unit
          </span>
        </div>

        {/* Carousel on Left & Text Content on Right */}
        <div className="mt-8 md:w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Side - Carousel */}
          <div className="w-full md:w-1/2">
            <Carousel />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 text-base text-gray-500 mx-4">
            <p className="text-gray-600">
              {text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "IT Services Unit | NIT Patna",
  };
}
