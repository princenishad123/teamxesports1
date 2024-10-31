import React, { useEffect, useState } from "react";

const ViewContestComp = ({
  image = "https://img.utdstc.com/icon/a3a/b16/a3ab16c48b142e28b6a2f7eb40b087c5e631bc84e3ac66b11533c727ca9c3211:200",
  name = " BGMI E-sports",
  date,
  time,
  mode,
  pricePool,
  winners,
  type,
  seat,
  bookedSeat,
  fee,
  round,
  paymentHandler,
  id,
}) => {
  const [percentage, setPercentage] = useState();

  useEffect(() => {
    setPercentage(Math.round((bookedSeat / seat) * 100));
    if (!seat) setPercentage(0);
  }, [seat]);
  return (
    <div className="w-md mx-auto h-auto border rounded-xl overflow-hidden my-4 shadow-sm border-slate-200 ">
      {/* bgmi name and date time decide here */}
      <div className="flex items-center mb-2 justify-between gap-4">
        <section className="flex items-center justify-between gap-4 bg-slate-50 px-4 skew-x-3">
          <img src={image} alt="" className="w-10 h-10 rounded" />
          <div>
            <h3 className="text-md font-semibold text-slate-600">{name}</h3>
            <span className="text-[12px] font-semibold">
              {date} | {time}
            </span>
          </div>
        </section>

        <section className="px-4">
          <h3 className="text-center text-[12px] font-semibold text-slate-600">
            Mode
          </h3>
          <p className="font-medium text-red-700 text-sm">{mode}</p>
        </section>
      </div>
      <hr />
      {/* price and mode winner */}

      <div className="w-full flex justify-around items-center">
        <div className="">
          <span className="text-sm text-slate-700">Prize Pool</span>
          <h2 className="text-center text-md font-semibold">₹ {pricePool}</h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700">Winners</span>
          <h2 className="text-center text-md font-semibold">{winners}</h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700">Type</span>
          <h2 className="text-center text-md font-semibold">{type}</h2>
        </div>
        <div className="">
          <span className="text-sm text-slate-700">Round</span>
          <h2 className="text-center text-md font-semibold">{round}</h2>
        </div>
      </div>

      {/* slotes */}

      <div className="w-full my-2 flex items-center justify-between px-2">
        <div className="w-[85%] max-sm:w-[70%] h-1 bg-red-100 rounded-md">
          <div
            style={{ width: `${percentage}%`, height: "100%" }}
            className="bg-red-500 rounded-md"
          ></div>
        </div>
        <span className="text-[14px] font-semibold mt-[-4px]">
          {bookedSeat}/{seat} Slots
        </span>
      </div>

      {/* Entry fee */}

      <hr />
    </div>
  );
};

export default ViewContestComp;
