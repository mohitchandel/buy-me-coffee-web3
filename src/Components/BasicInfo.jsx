import React from "react";

export const BasicInfo = () => {
  return (
    <>
      <div className="flex items-center justify-start pt-10 pb-3">
        <h2 style={{ fontSize: "26px" }}>Total Donation Yet : 12 MATIC</h2>
      </div>
      <div className="">
        <label htmlFor="message">Get Your Donation</label>
        <div className="flex items-center justify-start">
          <input
            name="message"
            type="text"
            className="appearance-none relative block w-50 px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            value="0xA12..."
          />
          <button className="group relative w-40 flex justify-center py-2 px-4 mx-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get For Address
          </button>
        </div>
        <div>
            <h2>Address Donated Matic</h2>
        </div>
      </div>
    </>
  );
};
