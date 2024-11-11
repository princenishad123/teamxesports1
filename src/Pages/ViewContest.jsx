import React, { useEffect, useState } from "react";
import ViewContestComp from "../Component/ViewContestComp";
import Winnings from "../Component/Winnings";
import Squad from "../Component/TypeMode/Squad";
import Duo from "../Component/TypeMode/Duo";
import axios from "axios";
import toast from "react-hot-toast";
import { useRegisterTeamMutation } from "../Redux/querySlice";
import ButtonSpinner from "../Component/ButtonSpinner";
import Loader from "../Component/Loader";
import { useParams } from "react-router-dom";
import SeleconLoader from "../Component/SeleconLoader";
const ViewContest = () => {
  const [showButton, setShowButton] = useState(false);
  const { id } = useParams();
  const [contest, setContest] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [button, setButton] = useState(false);

  // const [regiseterTeam, data] = useRegisterTeamMutation();
  useEffect(() => {
    axios
      .get(`/matches/tournaments/${id}`)
      .then((res) => {
        setIsLoading(false);
        setContest(res?.data.tournaments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const paymentHandler = () => {
    // regiseterTeam({ id });
    setButton(true);
    axios
      .post(`/matches/register-team/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        setButton(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {isLoading ? (
        <>
          <SeleconLoader />
          <SeleconLoader />
          <SeleconLoader />
        </>
      ) : (
        <div className="max-w-md mx-auto">
          {/* card view contest */}
          <ViewContestComp
            name={contest?.name}
            date={contest?.startDate}
            time={contest?.endDate}
            mode={contest?.map}
            pricePool={contest?.prizePool}
            winners={contest?.winners}
            type={"Squad"}
            seat={contest?.maxTeams}
            bookedSeat={contest.teams?.length}
            fee={contest?.entryFee}
            round={1}
            paymentHandler={paymentHandler}
            id={id}
            winner={contest?.image}
          />

          {contest?.entryFee == 0 ? (
            <button className="py-3 my-2 w-full mx-auto font-medium px-8 text-sm rounded-md text-white bg-green-700">
              Contest Fulled
            </button>
          ) : (
            <button
              onClick={paymentHandler}
              className="py-3 my-2 w-full mx-auto font-medium px-8 text-sm rounded-md text-white bg-green-700"
            >
              {button ? <ButtonSpinner /> : `₹ ${contest?.entryFee}`}
            </button>
          )}

          {/* Total teams joinded and prize Pool */}
          <div>
            <div className="w-full">
              <img src={contest?.image} alt="" />
            </div>

            {/* show winnigs and leaderboard */}
          </div>
        </div>
      )}
    </>
  );
};

export default ViewContest;
