import React from "react";
import { useGetAllUsersQuery } from "../../Redux/querySlice";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Users = () => {
  const { data } = useGetAllUsersQuery();

  const statusClasses = {
    Pending: "bg-yellow-200 text-yellow-600",
    Active: "bg-green-200 text-green-600",
    Inactive: "bg-red-200 text-red-600",
    "On Sale": "bg-blue-200 text-blue-600",
    Bouncing: "bg-purple-200 text-purple-600",
  };

  return (
    <div className="">
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
                    <button className="p-2 bg-red-100 rounded-md text-red-500 mx-1 h-10">
                      <MdDelete />
                    </button>
                    <button className="p-2  bg-green-100 rounded-md text-green-500 mx-1 h-10">
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
