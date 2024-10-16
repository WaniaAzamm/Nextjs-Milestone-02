import React from "react";

export default function ResultPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="shadow-lg w-full max-w-md p-10 mt-12 mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#044e83]">Grand Entrance Exam Result</h1>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="rn" className="block text-left text-gray-700 mb-2 font-semibold text-lg">Registration Number*</label>
            <input
              type="text"
              name="rn"
              placeholder="Registration Number"
              required
              className="mt-3 bg-gray-50 w-full p-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cb" className="block text-left text-gray-700 mb-2 font-semibold text-lg">CNIC or B-Form Number*</label>
            <input
              type="text"
              placeholder="CNIC or B-Form Number"
              name="cb"
              required
              className="mt-3 bg-gray-50 w-full p-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button className="mt-7 bg-[#044e83] text-white font-bold px-10 py-3 text-lg hover:translate-y-1 scale-115" type="submit">Get Results</button>
        </form>
      </div>
    </div>
  );
}
