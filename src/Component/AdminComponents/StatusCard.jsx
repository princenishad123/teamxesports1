import React from "react";

const StatusCard = ({ icon, users, text, bgColor, shadowColor, shadow }) => {
  return (
    <div
      className={`w-48 h-auto rounded-md cursor-pointer flex flex-wrap items-center gap-3 ${bgColor} shadow-lg ${shadowColor} text-white p-2`}
    >
      <div>{icon}</div>
      <div>
        <h2 className="leading-4 text-sm font-medium">{text}</h2>
        <span className="text-xl font-medium">{users}</span>
      </div>
    </div>
  );
};

export default StatusCard;
