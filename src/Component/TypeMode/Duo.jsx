import React from "react";

const Duo = ({
  teamName = "team_name",
  player1 = "player1",
  player2 = "player2",
}) => {
  return (
    <div className="w-full rounded-xl border-spacing-3 overflow-hidden bg-slate-100 my-2  ">
      <div className="w-full bg-red-100 text-md px-3 py-2 font-medium text-slate-600">
        {teamName}
      </div>

      <div className="px-3">
        <ul>
          <li className="py-1">{player1}</li>
          <li className="py-1">{player2}</li>
        </ul>
      </div>
    </div>
  );
};

export default Duo;
