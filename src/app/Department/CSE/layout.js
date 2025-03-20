import React, { Children } from 'react';
import DeptNavbar from "@/components/department/DeptNavbar";

export default function CSELayout({ children }) {
    return (
        <html lang="en">
            <body
                className={``}
            >
                <DeptNavbar dept="CSE" />
                <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
                    Computer Science And Engineering
                </h2>
                {children}
            </body>
        </html>
    );
}
