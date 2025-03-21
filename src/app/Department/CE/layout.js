import React, { Children } from 'react';
import DeptNavbar from "@/components/department/DeptNavbar";

export default function CELayout({ children }) {
    return (
        <html lang="en">
            <body
                className={``}
            >
                <DeptNavbar dept="CE" />
                <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
                    Civil Engineering
                </h2>
                {children}
            </body>
        </html>
    );
}
