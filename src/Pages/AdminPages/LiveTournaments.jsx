import React from "react";
import { useGetLiveTournamentsQuery } from "../../Redux/querySlice";
import DetailsOfRegisteredUser from "../../Component/DetailsOfRegisteredUser";

const LiveTournaments = () => {
  const query = { isCompleted: true };
  const { data } = useGetLiveTournamentsQuery(query);

  return (
    <div>
      {data?.tournaments?.length ? (
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
        <h2 className="text-xl font-medium text-center">Nothing here..</h2>
      )}
    </div>
  );
};

export default LiveTournaments;
