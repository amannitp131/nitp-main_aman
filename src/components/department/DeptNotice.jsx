"use client";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DepartmentNotify1 from "./DepartmentNotify1";

const DeptNotice = ({ dept }) => {
  const [Notices, setNotices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_BACKEND_API_URL
        }/api/notice?type=${dept.toLowerCase()}`
      );
      console.log(response.data);
      setNotices(response.data);
    };
    getData();
  }, []);

  return (
    <div className="w-full flex flex-col mr-4 max-sm:mr-0">
      <div className="bg-white rounded-lg shadow-lg px-4 h-full overflow-y-auto border border-red-200">
        <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
          <div>Announcement</div>
          <button className="hover:text-blue-500">View All</button>
        </div>
        <div className="overflow-hidden flex flex-col">
          {Notices.map((notice, id) => {
            if (notice.isVisible === 1) {
              return (
                <DepartmentNotify1
                  key={id}
                  title={notice.title}
                  attachments={notice.attachments}
                  important={notice.important}
                  link={notice.notice_link ? notice.notice_link : ""}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DeptNotice;
