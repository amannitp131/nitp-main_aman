"use client";
import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loadingSpinner";

const BISdashboard = () => {
  const uri =
    "https://www.services.bis.gov.in/php/BIS_2.0/dgdashboard/Standards_master/get_academic_dashboard_banner_scroll_items/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("Instemailid", "amit@nitp.ac.in");
        formData.append("Loginid", "bisscmd");
        formData.append("Loginpwd", "SNr@12#$%&!Rk");

        const res = await fetch(uri, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await res.json();
        //  console.log("Fetched data:", result);

        if (
          result.status === "success" &&
          Array.isArray(result.banner_scroll_data)
        ) {
          setData(result.banner_scroll_data);
        } else {
          console.error("Unexpected data format:", result);
          setError("Unexpected data format");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto px-4 py-8 w-11/12 md:w-4/5">
      <h1 className="text-3xl font-bold mb-6 text-red-800 text-center">
        BIS DASHBOARD
      </h1>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-red-500 text-lg">
              Sorry, Error Occurred - {error}.
            </p>
            <p className="text-red-500 text-lg">Try Refreshing the Tab</p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto max-h-[700px]">
          <table className="w-full border border-neutral-600 bg-white rounded-lg text-lg">
            <thead className="sticky top-0 z-10">
              <tr className="bg-gradient-to-r from-blue-200 to-cyan-200">
                <th className="px-4 py-4 text-left text-black">S.No.</th>
                <th className="px-4 py-4 text-left text-black">Title</th>
                <th className="px-4 py-4 text-left text-black">Description</th>
                <th className="px-4 py-4 text-left text-black">Date</th>
                <th className="px-4 py-4 text-left text-black">Link</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-blue-100 hover:scale-[1.02] transition-transform duration-200"
                >
                  <td className="px-4 py-2 text-left text-black">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-left text-black text-sm">
                    {item.title}
                  </td>
                  <td className="px-4 py-2 text-left text-black text-sm">
                    {item.description}
                  </td>
                  <td className="px-4 py-2 text-left text-black text-sm">
                    {item.created_at}
                  </td>
                  <td className="px-4 py-2 text-center text-neutral-300">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-blue-600 flex items-center justify-center gap-2 text-sm"
                      >
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const BISpage = () => <BISdashboard url="faculties" title="BIS Dashboard" />;

export default BISpage;
