import React from "react";
import { useGetCompletedTournamentsQuery } from "../../Redux/querySlice";
import DetailsOfRegisteredUser from "../../Component/DetailsOfRegisteredUser";
const CompletedTournaments = () => {
  const { data } = useGetCompletedTournamentsQuery();

  return (
    <div className="px-4">
      {data?.tournaments ? (
        <div>
          {data?.tournaments.map((e) => (
            <DetailsOfRegisteredUser
              key={e._id}
              name={e.name}
              id={e._id}
              date={e.startDate}
              time={e.time}
              mode={e.map}
              pricePool={e.prizePool}
              winners={20}
              type={e.type}
              seat={e.maxTeams}
              bookedSeat={e.teams.length}
              fee={e.entryFee}
              round={1}
            />
          ))}
        </div>
      ) : (
        <h2>Nothing Here...</h2>
      )}
    </div>
  );
};

export default CompletedTournaments;
