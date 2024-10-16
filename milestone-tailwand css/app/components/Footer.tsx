import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:space-x-10 justify-between items-start">
        <div className="mb-8 md:mb-0 flex-1">
          <h1 className="text-2xl font-bold">Core Courses</h1>
          <ul className="mt-3 space-y-1">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>
        
        <div className="mb-8 md:mb-0 flex-1">
          <h1 className="text-2xl font-bold">Advanced Courses</h1>
          <ul className="mt-3 space-y-1">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>
        
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Social Links</h1>
          <ul className="flex justify-center md:justify-start space-x-3 mt-4 text-2xl">
            <li className="hover:text-gray-500 cursor-pointer text-xl">
              <FaFacebook />
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-xl">
              <FaGithub />
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-xl">
              <FaLinkedin />
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-xl">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
