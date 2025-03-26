// // import Head from "next/head";

// // export default function Home() {
// //   const places = [
// //     {
// //       image:
// //         "https://www.nitp.ac.in/static/bank-ef1a8678b3e61a7d440dd338d0e74a3d.svg",
// //       subheading: "Bank",
// //       text: `There is a functional extension branch of Allahabad Bank within the institute premises. It provides all modern banking facilities to cater to the needs of students and employees on campus. Fee transactions are also carried out here.

// // Additionally, an ATM of Allahabad Bank is situated near the college gate, enabling hassle-free money withdrawal at any time.`,
// //     },
// //   ];

// //   return (
// //     <div className="mx-auto px-4 md:px-32 pt-8 bg-white bg-opacity-50">
// //       <Head>
// //         <title>Bank</title>
// //       </Head>

// //       <div className="grid grid-cols-1 gap-8">
// //         {places.map((place, index) => (
// //           <div key={index} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
// //             <div className="md:px-4">
// //               <h2 className="text-4xl font-bold mb-4 text-red-800">{place.subheading}</h2>
// //               <p className="text-gray-700 text-lg whitespace-pre-line leading-relaxed">
// //                 {place.text}
// //               </p>
// //             </div>
// //             {place.image && (
// //               <img
// //                 src={place.image}
// //                 alt={place.subheading}
// //                 className="w-3/4 md:w-2/5 rounded-md shadow-lg"
// //               />
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export async function generateMetadata({ params }) {
// //   return {
// //     title: "Bank | NIT Patna",
// //   };
// // }

// import Head from "next/head";

// export default function Home() {
//   const places = [
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Indian_Bank_logo.svg/2560px-Indian_Bank_logo.svg.png", // Replace with actual bank photo if available
//       subheading: "Bank",
//       text: `There is a functional extension branch of a bank within the institute premises. It provides all modern banking facilities to cater to the needs of students and employees on campus. Fee transactions are also carried out here.

// Additionally, an ATM is situated near the college gate, enabling hassle-free money withdrawal at any time.`,
//     },
//   ];

//   return (
//     <div className="mx-auto px-4 md:px-32 pt-8 bg-white bg-opacity-50">
//       <Head>
//         <title>Bank | NIT Patna</title>
//       </Head>

//       <div className="grid grid-cols-1 gap-8">
//         {places.map((place, index) => (
//           <div key={index} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
//             <div className="md:px-4">
//               <h2 className="text-4xl font-bold mb-4 text-red-800">{place.subheading}</h2>
//               <p className="text-gray-700 text-lg whitespace-pre-line leading-relaxed">
//                 {place.text}
//               </p>
//             </div>
//             {place.image && (
//               <img
//                 src={place.image}
//                 alt="Bank"
//                 className="w-3/4 md:w-2/5 rounded-md shadow-lg bg-gray-100"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function generateMetadata({ params }) {
//   return {
//     title: "Bank | NIT Patna",
//   };
// }
import Head from "next/head";

export default function Home() {
  const places = [
    {
      image: "https://timesofindia.indiatimes.com/photo/59385226.cms", // Replace with actual bank photo if available
      subheading: "Bank",
      text: `There is a functional extension branch of Indian Bank within the institute premises. It provides all modern banking facilities to cater to the needs of students and employees on campus. Fee transactions are also carried out here.

Additionally, an ATM of Indian Bank is situated near the college gate, enabling hassle-free money withdrawal at any time.`,
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-32 pt-8 bg-white bg-opacity-50">
      <Head>
        <title>Bank | NIT Patna</title>
      </Head>

      <div className="grid grid-cols-1 gap-8">
        {places.map((place, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="md:px-4">
              <h2 className="text-4xl font-bold mb-4 text-red-800">{place.subheading}</h2>
              <p className="text-gray-700 text-lg whitespace-pre-line leading-relaxed">
                {place.text}
              </p>
            </div>
            {place.image && (
              <img
                src={place.image}
                alt="Bank"
                className="w-3/4 md:w-2/5 rounded-md shadow-lg bg-gray-100"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Bank | NIT Patna",
  };
}
