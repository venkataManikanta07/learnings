import React from "react";

const DataComponent = ({ id, title, body, onHandleDelete }) => {
  const handleDelete = (id) => {
    onHandleDelete(id);
  };
  return (
    <div className="flex flex-col items-center justify-between">
      <div>
        <h2 className="text-red-900 font-bold text-xl my-2">{id}</h2>
        <h3 className="my-2 text-blue-950 text-xl">
          Title: {title.slice(0, 14)}
        </h3>
        <p className="my-2 text-black text-sm">Body: {body}</p>
      </div>
      <div className="mt-6">
        <button className="p-2 m-2 w-20 border border-white rounded-lg bg-blue-800 text-white">
          Edit
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="p-2 m-2 w-20 border border-white rounded-lg bg-red-800 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DataComponent;
