import React from "react";

const SeleconLoader = () => {
  return (
    <div className="w-full max-w-sm mx-auto mt-4 p-4 border rounded-lg bg-white shadow-md">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700">Slots</span>
        <span className="text-gray-700">
          {2}/{10}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-red-500 h-2.5 rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${50}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SeleconLoader;
