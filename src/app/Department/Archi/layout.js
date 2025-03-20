import React, { Children } from 'react';
import DeptNavbar from "@/components/department/DeptNavbar";

export default function ArchiLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={``}
            >
                <DeptNavbar dept="Archi" />
                <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
                    Architecture And Planning
                </h2>
                {children}
            </body>
        </html>
    );
}
