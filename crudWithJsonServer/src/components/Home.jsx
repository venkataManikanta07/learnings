import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const headers = ["Id", "Name", "Email", "Phone", "Action"];

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-2 p-2 flex flex-col items-center justify-center">
      <div className="w-3/4 flex items-center justify-center">
        <h1 className="font-bold text-4xl text-blue-800 my-5">
          List of users ...
        </h1>
        <Link to="/create">
          <button className="m-2 mt-4  p-2 w-24 h-11 bg-green-700 text-white border rounded-md">
            Add user
          </button>
        </Link>
      </div>
      <div className="w-[70%] bg-gray-200">
        <TableData users={users} setUsers = {setUsers} headers={headers} />
      </div>
    </div>
  );
};

export default Home;
