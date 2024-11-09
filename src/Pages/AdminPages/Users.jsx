import React, { useState } from "react";
import { useGetAllUsersQuery } from "../../Redux/querySlice";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import ButtonSpinner from "../../Component/ButtonSpinner";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
const Users = () => {
  const { data } = useGetAllUsersQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    wallet: "",
    email: "",
  });
  const statusClasses = {
    Pending: "bg-yellow-200 text-yellow-600",
    Active: "bg-green-200 text-green-600",
    Inactive: "bg-red-200 text-red-600",
    "On Sale": "bg-blue-200 text-blue-600",
    Bouncing: "bg-purple-200 text-purple-600",
  };

  const hadleEditProfile = (data) => {
    setUpdatedData({ ...data });
    console.log(updatedData);
    setShowEditPage(true);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .patch("/user/update-user", { ...updatedData })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        toast.success(res.data.message);
        setShowEditPage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteUser = (_id) => {
    const confirmation = confirm("Are you Sure !");

    if (confirmation) {
      axios
        .delete("/user/delete-user", { data: { _id } })
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="">
      {/* this is for update profile dive */}

      <div
        className={`w-full h-[88vh] popup absolute top-12 left-0  ${
          showEditPage ? "block" : "hidden"
        }`}
      >
        <div className="max-w-lg mx-auto h-auto py-4 rounded-lg bg-slate-50 mt-5">
          <div className="flex justify-between px-3 py-2">
            <h3 className="text-xl font-medium">Update Profile</h3>

            <button onClick={() => setShowEditPage(false)}>
              <FaXmark />
            </button>
          </div>
          <form className="my-4 px-5" onSubmit={handleForm}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
              value={updatedData?.name}
              placeholder="Enter Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, email: e.target.value })
              }
              value={updatedData?.email}
              placeholder="Enter Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <label htmlFor="">Wallet</label>
            <input
              type="number"
              name="wallet"
              placeholder="Enter amount"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, wallet: e.target.value })
              }
              value={updatedData?.wallet}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {/* Sign Up Button */}
            <button className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold hover:bg-red-600">
              {isLoading ? <ButtonSpinner /> : "Update"}
            </button>
          </form>
        </div>
      </div>

      <div className=" bg-gray-100 p-4 min-h-screen">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                All users ({data?.users?.length})
              </h2>
            </div>

            <form>
              <input
                type="text"
                name="bgmiId"
                placeholder="Enter BGMI Player Id"
                className="w-44 py-1 px-2 mb-4 mx-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-44 py-1 px-2 mx-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="px-4 py-2 bg-indigo-700 shadow-lg shadow-indigo-100 text-white rounded-md">
                Search user
              </button>
            </form>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-start">Name</th>
                <th className="px-4 py-2 border-b text-start">User Id</th>
                <th className="px-4 py-2 border-b text-start">Email</th>
                <th className="px-4 py-2 border-b text-start">BGMI Id</th>
                <th className="px-4 py-2 border-b text-start">Number</th>
                <th className="px-4 py-2 border-b text-start">Wallet</th>
                <th className="px-4 py-2 border-b text-start">MP</th>
                <th className="px-4 py-2 border-b text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.users.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b">{product.name}</td>
                  <td className="px-4 py-3 border-b">{product._id}</td>
                  <td className="px-4 py-3 border-b">{product.email}</td>
                  <td className="px-4 py-3 border-b">{product.bgmiId}</td>
                  <td className="px-4 py-3 border-b">{product.number}</td>
                  <td className="px-4 py-3 border-b">{product.wallet}</td>
                  <td className="px-4 py-3 border-b">
                    {product.tournaments.length}
                  </td>
                  <td className="px-4 py-3 border-b">
                    <button
                      onClick={() => {
                        handleDeleteUser(product._id);
                      }}
                      className="p-2 bg-red-100 rounded-md text-red-500 mx-1 h-10"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() =>
                        hadleEditProfile({
                          id: product._id,
                          name: product.name,
                          email: product.email,
                          wallet: product.wallet,
                        })
                      }
                      className="p-2  bg-green-100 rounded-md text-green-500 mx-1 h-10"
                    >
                      <AiFillEdit />
                    </button>
                  </td>

                  <td className="px-4 py-3 border-b">
                    <span
                      className={` py-1 rounded-full text-sm ${
                        statusClasses[product.status]
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
