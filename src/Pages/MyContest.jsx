import React, { useEffect, useState } from "react";
import CompletedCard from "../Component/CompletedCard";
import { useGetMyContestsQuery } from "../Redux/querySlice";
import axios from "axios";
import Loader from "../Component/Loader";

const MyContest = () => {
  const [activeButton, setActiveButton] = useState(3);
  const handleSlide = (e) => {
    setActiveButton(e);
  };

  const { data, isLoading } = useGetMyContestsQuery();

  return (
    <div className="max-w-xl mx-auto">
      <div className="w-full flex bg-white z-30 sticky top-[-14px] justify-center gap-4">
        {/* <button
          onClick={() => handleSlide(1)}
          className={`w-full py-1 border-b-2 ${
            activeButton == 1 ? "border-red-600 text-red-600" : ""
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => handleSlide(2)}
          className={`w-full py-1 border-b-2 ${
            activeButton == 2 ? "border-red-600 text-red-600" : ""
          }`}
        >
          Live
        </button> */}
        <button
          onClick={() => handleSlide(3)}
          className={`w-full py-1 border-b-2 ${
            activeButton == 3 ? "border-red-600 text-red-600" : ""
          }`}
        >
          My Contests
        </button>
      </div>
      <h2 className="text-md font-semibold my-4 px-2">My Contests</h2>
      {isLoading ? (
        <Loader />
      ) : (
        data?.myTournaments.map((e) => (
          <CompletedCard
            key={e._id}
            name={e.name}
            date={e.startDate}
            time={e.time}
            mode={e.map}
            pricePool={e.prizePool}
            winners={15}
            type={"Squad"}
            round={1}
            isCompolete={e.isCompleted}
            seat={e.maxTeams}
            bookedSeat={e.teams.length}
            fee={e.entryFee}
            roomId={e.roomId}
            roomPassword={e.roomPassword}
          />
        ))
      )}
    </div>
  );
};

export default MyContest;
