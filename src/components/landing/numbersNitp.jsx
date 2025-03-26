import React from "react";

const NumbersNitp = () => {
  return (
    <section
      id="institute-numbers"
      className="relative scroll-mt-32 my-6 bg-[url('https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 py-14 space-y-12 md:px-10 md:grid md:grid-cols-2 md:items-center md:max-w-screen-xl">
        <div className="text-white space-y-6 ">
          <h2 className="text-4xl font-extrabold uppercase text-yellow-400">
            A Legacy of Excellence 🎓
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            NIT Patna stands tall as one of the premier institutes in India,
            nurturing minds and empowering the future. With over
            <span className="font-bold text-yellow-400"> 7000+ students</span>,
            <span className="font-bold text-yellow-400"> 500+ faculty members</span>, 
            and a dynamic ecosystem of clubs, startups, and research, it continues to shine.
          </p>
          <div className="grid grid-cols-2 gap-6 text-white">
            {[
              { label: "Students", value: "7000+" },
              { label: "Faculty & Staff", value: "500+" },
              { label: "Departments", value: "10+" },
              { label: "Clubs & Cells", value: "20+" },
              { label: "Startups Running", value: "12+" },
              { label: "PhD Scholars", value: "200+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transition-transform transform hover:scale-110 duration-300 border border-yellow-400 p-4 rounded-lg bg-black/40"
              >
                <h1 className="text-4xl font-bold uppercase text-yellow-400">
                  {stat.value}
                </h1>
                <p className="text-lg uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersNitp;
