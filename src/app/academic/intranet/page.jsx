"use client";

import React, { useEffect, useState } from "react";

const IntranetRedirect = () => {
  const [seconds, setSeconds] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      window.location.href = "http://192.168.1.16:3333";
    }, 6000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to <span className="text-purple-700">NIT Intranet</span>
        </h1>

        <h2 className="text-lg font-medium text-red-600 mt-4">
          Connect to NIT Network (WiFi or Ethernet)
        </h2>

        <p className="mt-4 text-gray-600">
          If connected, you will be redirected in{" "}
          <span className="text-red-700 font-semibold">{seconds}</span> seconds.
        </p>

        <p className="mt-2 text-gray-600">
          If the redirection does not work, click below:
        </p>

        <a
          href="http://192.168.1.16:3333"
          className="inline-block mt-4 px-5 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition duration-300"
        >
          Go To NIT Intranet
        </a>
      </div>
    </div>
  );
};

export default IntranetRedirect;
