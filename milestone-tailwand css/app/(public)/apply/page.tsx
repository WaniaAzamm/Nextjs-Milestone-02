import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";

const ApplyPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='shadow-lg w-full max-w-md h-[500px] p-10 mt-12 mx-auto text-center'>
        <h1 className='text-[#044e83] text-2xl md:text-4xl'>Before continuing to the application, please subscribe on these social media platforms.</h1>
        <FaFacebook className='mx-auto my-4 text-[#044e83] text-5xl'/>
        <Link href="/signup">
          <button className='bg-[#044e83] text-lg py-3 text-white px-9 my-2 hover:bg-opacity-40 transition duration-300'>Continue</button>
        </Link>
        <p className='text-lg pt-4'>Already Applied? <span className='underline cursor-pointer text-[#044e83] font-semibold'>Get Admit Card</span></p>
      </div>
    </div>
  )
}

export default ApplyPage;
