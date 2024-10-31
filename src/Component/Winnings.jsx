import React from "react";

const Winnings = ({ rank = "", prize = "" }) => {
  return (
    <tr>
      <td className="flex px-3 justify-between bg-slate-100 rounded-md my-[2.5px] text-slate-600 font-semibold">
        <span>{rank}</span> <span>₹ {prize}</span>
      </td>
    </tr>
  );
};

export default Winnings;
