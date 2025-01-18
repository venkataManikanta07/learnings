import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { STUDENT_API } from "./constant";

const CreateStudent = () => {
  const navigate = useNavigate();
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [place, setplace] = useState("");
  const [phone, setphone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch(STUDENT_API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        console.log(res);
        alert("Student saved successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Add Student
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Id Field */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="id"
              className="w-1/3 text-gray-600 font-medium text-right"
            >
              Id
            </label>
            <input
              type="text"
              id="id"
              name="id"
              required
              value={id}
              onChange={(e) => setid(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter student id"
            />
          </div>

          {/* Name Field */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="name"
              className="w-1/3 text-gray-600 font-medium text-right"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter student name"
            />
          </div>

          {/* Place Field */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="place"
              className="w-1/3 text-gray-600 font-medium text-right"
            >
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              required
              value={place}
              onChange={(e) => setplace(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter student place"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="phone"
              className="w-1/3 text-gray-600 font-medium text-right"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              required
              name="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter student phone number"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
            >
              Save
            </button>
            <Link to="/">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
              >
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
