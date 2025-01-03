import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DATA_API } from "../utils/constants";

const TableData = ({ users, setUsers, headers }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete(`${DATA_API}/${id.toString()}`)
        .then((res) => {
          const newUsers = users.filter((user) => {
            return user.id != id;
          });
          setUsers(newUsers);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-300">
          {headers.map((header, index) => (
            <th
              key={index}
              className="text-xl font-bold p-2 text-center border"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="odd:bg-white even:bg-gray-100">
            <td className="text-center p-2 border">{user.id}</td>
            <td className="text-center p-2 border">{user.name}</td>
            <td className="text-center p-2 border">{user.email}</td>
            <td className="text-center p-2 border">{user.phone}</td>
            <td className="text-center p-2 border">
              <Link to={`/read/${user.id}`}>
                <button className="px-3 py-2 m-1 bg-green-600 text-white border rounded-md">
                  Read
                </button>
              </Link>
              <Link to={`/update/${user.id}`}>
                <button className="px-3 py-2 m-1 bg-blue-600 text-white border rounded-md">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="px-3 py-2 m-1 bg-red-600 text-white border rounded-md"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
