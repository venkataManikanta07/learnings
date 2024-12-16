import React from "react";

const DataComponent = ({
  id,
  title,
  data,
  setData,
  body,
  onHandleDelete,
  newData,
  setNewData,
  isEditable,
  setIsEditable,
  setPatchId
}) => {
  const handleDelete = (id) => {
    setPatchId(id); 
    onHandleDelete(id);
  };

  const handleEditChange = (id) => {
    setPatchId(id)
    const currentEditObject = data.filter(
      (currentItem) => currentItem.id === id
    );
    if (currentEditObject && currentEditObject.length > 0) {
      setNewData({
        title: currentEditObject[0].title,
        body: currentEditObject[0].body,
      });
      setIsEditable(true); 
    }
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
        <button
          onClick={() => handleEditChange(id)}
          className="p-2 m-2 w-20 border border-white rounded-lg bg-blue-800 text-white"
        >
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
