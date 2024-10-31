import React, { useEffect, useState } from "react";
import ViewContestComp from "../Component/ViewContestComp";
import Winnings from "../Component/Winnings";
import Squad from "../Component/TypeMode/Squad";
import Duo from "../Component/TypeMode/Duo";
import axios from "axios";
import toast from "react-hot-toast";
import { useRegisterTeamMutation } from "../Redux/querySlice";

import { useParams } from "react-router-dom";
const ViewContest = () => {
  const [showButton, setShowButton] = useState(false);
  const { id } = useParams();
  const [contest, setContest] = useState("");

  const [button, setButton] = useState(true);

  // const [regiseterTeam, data] = useRegisterTeamMutation();
  useEffect(() => {
    axios
      .get(`/matches/tournaments/${id}`)
      .then((res) => {
        setContest(res?.data.tournaments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const paymentHandler = () => {
    // regiseterTeam({ id });
    setButton("Loading...");
    axios
      .post(`/matches/register-team/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        setButton(contest?.entryFee);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-md mx-auto">
      {/* card view contest */}
      <ViewContestComp
        name={contest?.name}
        date={contest?.startDate}
        time={contest?.endDate}
        mode={contest?.map}
        pricePool={contest?.prizePool}
        winners={15}
        type={"Squad"}
        seat={contest?.maxTeams}
        bookedSeat={contest.teams?.length}
        fee={contest?.entryFee}
        round={1}
        paymentHandler={paymentHandler}
        id={id}
      />
      <button
        onClick={paymentHandler}
        className="py-3 mt-2 w-full mx-auto font-medium px-8 text-sm rounded-md text-white bg-green-700"
      >
        {button ? `₹ ${contest?.entryFee}` : button}
      </button>

      {/* Total teams joinded and prize Pool */}
      <div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => setShowButton(false)}
            className={`w-1/2 ${
              showButton ? "" : "border-red-600"
            } py-1 border-b-2 text-slate-600 font-medium`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setShowButton(true)}
            className={`w-1/2 ${
              showButton ? "border-red-600" : ""
            } py-1  border-b-2 text-slate-600 font-medium`}
          >
            Winnings
          </button>
        </div>

        {/* show winnigs and leaderboard */}
        <div className="w-full h-96 relative overflow-hidden  overflow-y-scroll winninhsAndLeaderboard">
          <div
            className={`w-full min-h-44  absolute top-0 left-0 transition-all ${
              showButton ? "translate-x-[-570px]" : "translate-x-[0]"
            }`}
          >
            <div className="px-4">
              {/* here duo solo squad component */}
              <Duo />
              <Duo />
              <Duo />
              <Duo />
            </div>
          </div>

          {/* Winnings */}
          <div
            className={`w-full px-4 min-h-44 absolute top-0  left-0 transition-all ${
              showButton ? "translate-x-[0px]" : "translate-x-[570px]"
            } `}
          >
            <table className="w-full my-2">
              <thead>
                <tr className="flex justify-between">
                  <td className="text-center text-md font-medium text-slate-500">
                    Rank
                  </td>
                  <td className="text-center text-md font-medium text-slate-500">
                    Prize
                  </td>
                </tr>
              </thead>

              <tbody>
                <Winnings rank="1" prize="1000" />
                <Winnings rank="2" prize="500" />
                <Winnings rank="3" prize="300" />
                <Winnings rank="4" prize="250" />
                <Winnings rank="5" prize="200" />
                <Winnings rank="6" prize="150" />
                <Winnings rank="7" prize="100" />
                <Winnings rank="8-10" prize="50" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContest;
