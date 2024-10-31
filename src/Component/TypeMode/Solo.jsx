import React from "react";

const Solo = ({ playerName = "Player_Name" }) => {
  return <div className="w-full py-1 border-t">{playerName}</div>;
};

export default Solo;
