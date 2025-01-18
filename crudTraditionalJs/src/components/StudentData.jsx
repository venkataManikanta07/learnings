import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { STUDENT_API } from "./constant";

const StudentData = () => {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);

  const handleDelete = (id) => {

    if (window.confirm("Sure you want to delete?")) {
      fetch(STUDENT_API + "/" + id, {
        method: "DELETE",
      })
        .then((res) => {
            console.log(res)
            window.location.reload(); 
        })
        .catch((err) => console.log(err));
    }
  };
  const viewStudent = (id) => {
    console.log(id);
    navigate("/student" + id);
  };

  const editStudentData = (id) => {
    console.log(id);
    navigate("/edit" + id);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(STUDENT_API)
      .then((res) => res.json())
      .then((data) => setStudentsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Students Data</h2>
        <Link to="/create">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
            Add New Student
          </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Place</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentsData &&
              studentsData.map((student, index) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-100 border-b border-gray-200"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.place}</td>
                  <td className="px-6 py-4">{student.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Link to={`/student/${student.id}`}>
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600"
                          onClick={() => viewStudent(student.id)}
                        >
                          View
                        </button>
                      </Link>
                      <Link to={`/edit/${student.id}`}>
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded shadow hover:bg-yellow-600"
                          onClick={() => editStudentData(student.id)}
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;
