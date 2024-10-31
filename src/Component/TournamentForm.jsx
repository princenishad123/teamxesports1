import React from "react";

const TournamentForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Step 1</h2>
        <h3 className="text-2xl font-bold mb-6 text-center">Your Profile</h3>
        <p className="text-center text-gray-500 mb-6">
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
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
                Last Name*
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Input Your Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email*</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Input Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Phone Number*
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Input Your Phone Number"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Password*
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create Password"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password*
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Your Password"
              />
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TournamentForm;
