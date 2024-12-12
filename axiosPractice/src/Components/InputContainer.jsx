import React from "react";

const InputContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-2/4 h-auto my-3 bg-gray-100 p-3 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add Details</h2>
      <div className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Add Title"
          className="w-2/4 p-2 m-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Add Text"
          className="w-2/4 p-2 m-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-1/4 p-2 m-2  bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Add
        </button>
      </div>
    </div>
  );
};

export default InputContainer;
