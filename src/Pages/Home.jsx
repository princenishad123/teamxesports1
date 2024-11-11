import React, { useEffect } from "react";
import MatchCard from "../Component/MatchCard";
import { useGetContestsQuery } from "../Redux/querySlice";
import Loader from "../Component/Loader";
import SeleconLoader from "../Component/SeleconLoader";
const Home = () => {
  let { data, isLoading, isError } = useGetContestsQuery();

  return (
    <>
      <div className="max-w-xl px-2 mx-auto">
        {isLoading ? (
          <>
            <SeleconLoader />
            <SeleconLoader />
            <SeleconLoader />
          </>
        ) : (
          data?.tournaments?.map((e) => (
            <MatchCard
              key={e._id}
              id={e._id}
              name={e.name}
              date={e.startDate}
              time={"09:30 PM"}
              mode={e.map}
              pricePool={e.prizePool}
              winners={e.winners}
              type={e.type}
              seat={e.maxTeams}
              bookedSeat={e.teams.length}
              fee={e.entryFee}
              round={1}
              boats={e.boats}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
