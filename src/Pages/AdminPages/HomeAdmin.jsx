import React from "react";
import StatusCard from "../../Component/AdminComponents/StatusCard";
import { FaUserGroup } from "react-icons/fa6";
import { GiStoneCrafting } from "react-icons/gi";
import { PiCurrencyInrFill } from "react-icons/pi";
import { TbCreditCardRefund } from "react-icons/tb";
import { PiCurrencyInr } from "react-icons/pi";
import DoughnutChart from "../../Component/AdminComponents/DoughnutChart";
import { useGetContestsQuery } from "../../Redux/querySlice";
const HomeAdmin = () => {
  const { data } = useGetContestsQuery();

  const teams = data?.tournaments.map((e) => e.teams.length);
  const trNames = data?.tournaments.map((e) => e.name);
  const competedTournaments = data?.tournaments.filter((e) => e.isCompleted);
  const liveTournaments = data?.tournaments.filter(
    (e) => e.isCompleted === false
  );

  return (
    <>
      <div className="flex items-center flex-row-reverse justify-end">
        <div className="flex items-center flex-wrap px-6 gap-4">
          <StatusCard
            icon={<FaUserGroup size={30} />}
            bgColor={"bg-purple-600"}
            shadowColor={"shadow-purple-300"}
            users={100}
            text={"Total users"}
          />
          <StatusCard
            icon={<GiStoneCrafting size={30} />}
            bgColor={"bg-pink-500"}
            shadowColor={"shadow-pink-300"}
            users={liveTournaments?.length}
            text={"Live Contests"}
          />
          <StatusCard
            icon={<GiStoneCrafting size={30} />}
            bgColor={"bg-indigo-700"}
            shadowColor={"shadow-indigo-400"}
            users={competedTournaments?.length}
            text={"Completed Contests"}
          />
        </div>

        <div className="w-72 h-72">
          <DoughnutChart datas={teams} labels={trNames} />
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
