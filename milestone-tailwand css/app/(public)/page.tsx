"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between mt-14">
        <div className="md:pl-16 py-12 md:py-36 text-center md:text-left">
          <h1 className="text-[#044e83] text-4xl md:text-7xl font-extrabold inline-block">
            Governor Sindh
          </h1>
          <h2 className="text-[#044e65] pl-1 mt-3 md:mt-5 text-2xl md:text-5xl font-normal">
            Kamran Khan Tessori
          </h2>
          <p className="text-[#56b9f3] mt-6 text-2xl md:text-5xl font-extrabold">
            Initiative for
          </p>
          <p className="text-[#56b9f3] mt-2 md:mt-4 text-2xl md:text-5xl font-extrabold">
            Artificial Intelligence,
          </p>
          <p className="text-[#56b9f3] mt-2 md:mt-4 text-2xl md:text-5xl font-extrabold">
            Web 3.0 & Metaverse
          </p>
          <h1 className="text-[#044e83] text-xl md:text-3xl mt-4 md:mt-5 font-extrabold">
            Earn up to $5,000 / month
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12">
            <Link href="/signup">
              <button className="bg-[#044e83] mt-6 text-lg md:text-2xl text-white font-bold px-4 md:px-5 py-2 md:py-3 rounded-lg transition-colors duration-500 hover:bg-blue-500">
                Apply now
              </button>
            </Link>
            <div className="flex flex-col items-center md:items-start mt-6 md:ml-8">
              <h1 className="text-[#044e83] font-extrabold text-2xl md:text-3xl">
                563,456
              </h1>
              <h3 className="text-[#044e83] font-semibold">
                Accepted Applications
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center  md:mt-20">
          <Image
            height="1000"
            width="1000"
            className="w-60 h-60 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
            src="/pic.jpeg"
            alt="logo"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default page;
