import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DATA_API } from "../utils/constants";

const Create = () => {
  const navigate = useNavigate();

  // State to hold new user input
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Step 1: Fetch existing users
    axios
      .get(DATA_API)
      .then((res) => {
        const existingUsers = res.data;

        // Step 2: Calculate the next sequential ID
        const nextId =
          existingUsers.length > 0
            ? Math.max(...existingUsers.map((user) => parseInt(user.id))) + 1
            : 1;

        // Step 3: Add the calculated ID to the new user object
        const userWithId = {
          ...newUser,
          id: nextId.toString(), // Ensure ID is a string
        };

        // Step 4: Send a POST request to add the new user
        return axios.post(DATA_API, userWithId);
      })
      .then((res) => {
        console.log("User added successfully:", res.data);
        navigate("/"); // Navigate to the home page after success
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold m-2 p-2 text-blue-600 border-x-blue-800">
        Add User
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-2/4 bg-white p-6 rounded shadow-md"
      >
        {/* Name Input */}
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
            onChange={handleInputChange}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={newUser.email}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Email"
            onChange={handleInputChange}
          />
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={newUser.phone}
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Phone"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button and Navigation Link */}
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
