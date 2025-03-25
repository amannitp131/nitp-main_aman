import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto sm:px-8 py-10 text-[#333333] w-11/12 md:w-4/5 bg-[#F8F8F8] shadow-lg rounded-lg">
      {/* About Section */}
      <section className="mb-10">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-[#8B0000] uppercase">
          About RAC-S
        </h1>
        <p className="text-lg leading-relaxed text-justify md:text-start">
          The ISRO's research and development operations in the Eastern India
          region are coordinated by the Regional Academic Centre for Space
          (RAC-S) — a joint initiative of ISRO and NIT Patna. RAC-S aims to
          promote space technology activities, facilitate capacity building, and
          encourage R&D aligned with ISRO's objectives.
        </p>
      </section>

      {/* MoU Section */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white p-5 rounded-md shadow-md mb-10">
        <h2 className="text-3xl font-bold text-center mb-3">
          Memorandum of Understanding (MoU)
        </h2>
        <p className="text-center">
          View MoU documents{" "}
          <a
            href="https://drive.google.com/file/d/1VWtRgrYUm3FgDRphBtzrpitG0VnrpF4d/view"
            className="underline font-semibold hover:text-[#FFD700] transition"
          >
            here
          </a>
        </p>
      </section>

      {/* Management Committee */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-4">
          Management Committee
        </h2>
        <Image
          src="https://i.postimg.cc/y8hgdH7N/administation-Com.png"
          alt="Management Committee"
          width={600}
          height={400}
          className="w-full rounded-lg border-4 border-[#8B0000] shadow-md"
        />
      </section>

      {/* Call for Project Proposal */}
      <section className="bg-[#E6F0FF] p-6 rounded-md shadow-md mb-10">
        <h2 className="text-3xl font-bold text-center text-[#004080] mb-4">
          Call for Project Proposal
        </h2>
        <p className="leading-relaxed mb-4">
          ISRO-NIT Patna Regional Academic Centre for Space (RAC-S) invites
          research project proposals from faculty members in the Eastern region
          of India.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            **Short-term projects** (up to 1 year) with a budget limit of ₹1
            Lakh.
          </li>
          <li>
            **Long-term R&D projects** (1-3 years) with a budget limit of ₹25
            Lakh.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center p-6 border-t-4 border-[#8B0000]">
        <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Contact</h2>
        <p className="font-medium">
          Regional Coordinator, ISRO-NIT Patna Regional Academic Centre for Space (RAC-S)
          <br />
          National Institute of Technology Patna
          <br />
          Email:{" "}
          <a
            href="mailto:racs@nitp.ac.in"
            className="text-[#0066CC] underline hover:text-[#004080] transition"
          >
            racs@nitp.ac.in
          </a>
          <br />
          Phone: +91 7752957828 / 9523592768
        </p>
      </section>
    </div>
  );
};

export default page;
