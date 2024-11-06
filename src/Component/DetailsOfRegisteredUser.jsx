import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const DetailsOfRegisteredUser = ({
  image = "https://i.postimg.cc/PxdqnWyG/bf67ca742c1a648df202ab9c1e2a2128-icon.webp",
  name = " BGMI E-sports",
  id,
  date,
  time,
  mode,
  pricePool,
  winners,
  type,
  seat,
  bookedSeat,
  round,
  roomId,
  roomPassword,
}) => {
  const [percentage, setPercentage] = useState(
    Math.round((bookedSeat / seat) * 100)
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!seat) setPercentage(0);
  }, []);

  return (
    <div className="w-full h-auto border rounded-xl overflow-hidden my-4 shadow-sm border-slate-200 ">
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

      <div className="flex items-center my-3 justify-between px-4">
        <h3 className="font-semibold text-slate-500">
          Room Id : {roomId} | Room Password : {roomPassword}
        </h3>
        <NavLink to={`/admin-account/tournament/${id}`}>
          <button className="py-1 font-medium px-8 text-sm rounded-md text-white bg-green-700">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsOfRegisteredUser;
