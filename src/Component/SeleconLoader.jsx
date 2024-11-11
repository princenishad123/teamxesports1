import React from "react";
import "./loader.css";
const SeleconLoader = () => {
  return (
    <div className="w-full relative overflow-hidden h-auto border rounded-xl cursor-pointer overflow-hidden my-4 shadow-sm border-slate-200 ">
      <div className="animationSlider"></div>
      {/* bgmi name and date time decide here */}
      <div className="flex items-center mb-2 justify-between gap-4">
        <section className="flex items-center justify-between w-12 h-8  gap-4 bg-gray-100 mx-3 my-1 px-4 skew-x-3">
          <div>
            <h3 className="text-md font-semibold text-slate-600"></h3>
            <span className="text-[12px] font-semibold"></span>
          </div>
        </section>

        <section className="px-4">
          <h3 className="text-center text-[12px] font-semibold text-slate-600"></h3>
          <p className="font-medium text-red-700 text-sm w-16 h-8 m-2 bg-gray-100"></p>
        </section>
      </div>
      <hr />
      {/* price and mode winner */}

      <div className="w-full flex justify-around items-center">
        <div className="">
          <span className="text-sm text-slate-700"></span>
          <h2 className="text-center text-md font-semibold w-16 h-8 m-2 bg-gray-100"></h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700"></span>
          <h2 className="text-center text-md font-semibold w-16 h-8 m-2 bg-gray-100"></h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700"></span>
          <h2 className="text-center text-md font-semibold w-16 h-8 m-2 bg-gray-100"></h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700"></span>
          <h2 className="text-center text-md font-semibold w-16 h-8 m-2 bg-gray-100"></h2>
        </div>
      </div>

      {/* slotes */}

      <div className="w-full my-2 flex items-center justify-between px-2">
        <div className="w-[85%] overflow-hidden max-sm:w-[70%] h-1 bg-gray-100 rounded-md"></div>
        <span className="text-[14px] font-semibold mt-[-4px]"></span>
      </div>

      {/* Entry fee */}

      <hr />

      <div className="flex items-center my-3 justify-between px-4">
        <h3 className="font-semibold text-slate-500"></h3>
        <button className="py-1 font-medium px-8 text-sm rounded-md text-white w-16 h-5 m-2 bg-gray-100"></button>
      </div>
    </div>
  );
};

export default SeleconLoader;
