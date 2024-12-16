import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import DataComponent from "./DataComponent";

const DataUi = ({
  data,
  setData,
  newData,
  setNewData,
  isEditable,
  setIsEditable,
  patchId, 
  setPatchId
}) => {
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const onHandleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if ((res.status = 200)) {
        const newData = data.filter((currentElement) => {
          return currentElement.id != id;
        });
        setData(newData);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="m-2 p-2 ">
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <ul className="flex flex-row items-center justify-evenly p-2 m-2 flex-wrap">
          {data.map((currentElement) => {
            const { id, title, body } = currentElement;
            return (
              <li
                key={id}
                className=" flex flex-col items-center justify-center w-96 h-72 m-2 p-2 shadow-lg rounded-sm border-l-4 border-black"
              >
                <DataComponent
                  id={id}
                  title={title}
                  body={body}
                  onHandleDelete={() => onHandleDelete(id)}
                  data={data}
                  setData={setData}
                  newData={newData}
                  setNewData={setNewData}
                  isEditable={isEditable}
                  setIsEditable={setIsEditable}
                  patchId = {patchId}
                  setPatchId = {setPatchId}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DataUi;
