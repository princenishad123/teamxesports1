import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailsOfRegisteredUser from "../../Component/DetailsOfRegisteredUser";
import UserTable from "../../Component/UserTable";
import toast from "react-hot-toast";

const TournamentsDetails = () => {
  const { id } = useParams();
  const [trdetails, setTrDetails] = useState([]);
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("Send");
  useEffect(() => {
    axios
      .get(`/matches/tournament/${id}`)
      .then((res) => {
        setTrDetails([res.data.tournaments]);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setRoomPassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const idPassword = Object.fromEntries(formData.entries());

    if (idPassword.roomId == "") {
      return toast.error("All field is required");
    }

    setButton("sending..");
    axios
      .patch(`/matches/set-room-password/${id}`, idPassword)
      .then((res) => {
        toast.success("room id & password sended");
        setButton("Send");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-6 bg-slate-100">
      <div className="bg-white rounded-md">
        {trdetails.map((e) => (
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
            roomId={e.roomId}
            roomPassword={e.roomPassword}
          />
        ))}
      </div>
      <div className="bg-white p-3 my-4 rounded-md">
        <h2 className="text-xl my-2 font-semibold">Send Room Id & password </h2>
        <form onSubmit={setRoomPassword}>
          <input
            type="text"
            name="roomId"
            placeholder="Enter Room Id"
            className="w-44 py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="text"
            name="roomPassword"
            placeholder="Enter Room Password"
            className="w-44 py-1 px-2  mx-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="px-4 py-2 bg-indigo-700 shadow-lg shadow-indigo-100 text-white rounded-md">
            {button}
          </button>
        </form>
      </div>
      <div>
        <UserTable data={users} />
      </div>
    </div>
  );
};

export default TournamentsDetails;
