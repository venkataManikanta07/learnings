import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const [displayedUser, setDisplayedUser] = useState(null); // Set initial state to null
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setDisplayedUser(res.data))
      .catch((err) => console.log(err));
  }, [id]); // Add 'id' as dependency to avoid warnings

  console.log(displayedUser);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {displayedUser ? ( // Conditional rendering
        <div className="bg-white shadow-md rounded-lg p-12 text-center max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            User Id: {displayedUser.id}
          </h1>
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            Name: {displayedUser.name}
          </h2>
          <h2 className="text-2xl font-medium text-gray-700 mb-4">
            Email: {displayedUser.email}
          </h2>
          <h2 className="text-2xl font-medium text-gray-700 mb-6">
            Phone: {displayedUser.phone}
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate(`/update/${id}`);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default Read;
