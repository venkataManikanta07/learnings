import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold m-2 p-2 text-blue-600 border-x-blue-800">
        Add user
      </h1>
      <form className="w-2/4 bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newUser.name}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Phone"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
          <Link
            to="/"
            className="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Home ⬅️
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
