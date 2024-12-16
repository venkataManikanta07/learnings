import React from "react";

const TableData = ({users, headers}) => {
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
              <button className="px-3 py-2 m-1 bg-blue-600 text-white border rounded-md">
                Edit
              </button>
              <button className="px-3 py-2 m-1 bg-red-600 text-white border rounded-md">
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
