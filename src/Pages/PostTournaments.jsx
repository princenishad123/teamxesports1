import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const PostTournaments = () => {
  const [button, setbutton] = useState("Create Now");
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tournament = Object.fromEntries(formData.entries());
    setbutton("creating...");
    axios
      .post("/matches/tournament-create", { ...tournament })
      .then((res) => {
        toast.success("Tournament Created");
        setbutton("Create Now");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full flex px-6  h-auto ">
      <div className="bg-slate-50 p-4 rounded-lg shadow-md w-full">
        <h3 className="text-2xl font-bold mb-6 ">Create Tournament </h3>

        <form onSubmit={handleForm}>
          {/* name enrty fee proze pool */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Tournament Name*
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Input Your First Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Entry Fee *
              </label>
              <input
                type="number"
                name="entryFee"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entry Fee"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Prize Pool*
              </label>
              <input
                type="number"
                name="prizePool"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Prize Pool"
              />
            </div>
          </div>

          {/* maxteams startDate time */}

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Max Teams*
              </label>
              <input
                type="number"
                name="maxTeams"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Input Your First Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Start Date *
              </label>
              <input
                type="date"
                name="startDate"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entry Fee"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Time*</label>
              <input
                type="time"
                name="time"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Prize Pool"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Map*
              </label>
              <select
                name="map"
                id=""
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Erangel">Erangel</option>
                <option value="Miramar">Miramar</option>
                <option value="Sanhok">Sanhok</option>
                <option value="TDM">TDM</option>
                <option value="Livik">Livik</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Type *</label>
              <select
                name="type"
                id=""
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Squad">Squad</option>
                <option value="Duo">Duo</option>
                <option value="Solo">Solo</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Description*
            </label>
            <textarea
              name="description"
              className="w-full p-2 border h-32 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Input Your Phone Number"
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostTournaments;
