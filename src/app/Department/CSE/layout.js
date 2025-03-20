import React, { Children } from 'react';
import DeptNavbar from "@/components/department/DeptNavbar";
import DepartmentSidebar from '@/components/department/DeptSidebar';

export default function CSELayout({ children }) {
    return (
        <html lang="en">
            <body
                className={``}
            >
                <div className='flex shrink-0'>
                    {/* <DeptNavbar dept="CSE" /> */}
                    <div>
                        <DepartmentSidebar dept="CSE" />
                    </div>
                    <div className='flex flex-col flex-1 overflow-auto'>
                        <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
                            Computer Science And Engineering
                        </h2>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
