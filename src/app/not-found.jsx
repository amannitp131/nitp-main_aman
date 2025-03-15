"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-[410px] w-full">
        {/* Background-styled 404 text */}
        <div className="relative h-[280px] -z-10">
          <h1
            className="absolute left-1/2 transform -translate-x-1/2 text-[230px] font-extrabold bg-cover bg-center bg-clip-text text-transparent"
            style={{
              backgroundImage: `url("https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg")`,
            }}
          >
            Oops!
          </h1>
        </div>
        
        <h2 className="text-black text-2xl font-bold uppercase mt-5">404 - Page not found</h2>
        <p className="text-black text-sm font-normal my-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="text-black text-sm font-semibold">You will be redirected to the homepage in {seconds} seconds.</p>

        {/* Button */}
        <a
          href="/"
          className="mt-5 inline-block bg-blue-600 text-white uppercase font-bold py-3 px-6 rounded-full shadow-lg transition hover:bg-blue-700"
        >
          Go To Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
