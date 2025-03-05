import React from "react";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-xl p-6 shadow-md">
      <svg
        className="w-16 h-16 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 13h6m-6 4h6m-9 4h12M5 3h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        ></path>
      </svg>
      <p className="mt-4 text-gray-500 text-lg font-semibold">No Data Found</p>
    </div>
  );
};

export default NoDataFound;
