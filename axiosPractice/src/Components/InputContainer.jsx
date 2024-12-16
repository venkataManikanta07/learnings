import React, { useState } from "react";
import { patchData, postData } from "../Api/PostApi";

const InputContainer = ({
  newData,
  setNewData,
  data,
  setData,
  isEditable,
  setIsEditable,
  patchId,
  setPatchId,
}) => {
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewData((prevData) => ({
      //Remeber the syntax (() => ({}))
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isEditable) {
      const res = await postData(newData);
      if ((res.status = 200)) {
        console.log(res.data)
        setData([...data, res.data]);
        setNewData({ title: "", body: "" });
      }
    } else {
      const res = await patchData(patchId, newData);
      if ((res.status = 200)) {
        setData((prevData) =>
          prevData.map((item) => (
            item.id === patchId ? { ...item, ...res.data } : item
          ))
        );
        setNewData({ title: "", body: "" }); // Reset the input fields
        setIsEditable(false); // Switch back to add mode
        setPatchId(null); // Clear the patchId
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-2/4 h-auto my-3 bg-gray-100 p-3 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add Details</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="w-full flex justify-center items-center">
          {/* In onChange={() => handleInputChange()}, you're creating a new function that calls
           handleInputChange without any arguments. Since handleInputChange expects an event object,
            it throws an error when trying to access e.target. */}
          <input
            name="title"
            type="text"
            value={newData.title}
            onChange={handleInputChange}
            placeholder="Add Title"
            className="w-2/4 p-2 m-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="body"
            type="text"
            value={newData.body}
            onChange={(e) => handleInputChange(e)}
            placeholder="Add Text"
            className="w-2/4 p-2 m-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-1/4 p-2 m-2  bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            {isEditable ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputContainer;
