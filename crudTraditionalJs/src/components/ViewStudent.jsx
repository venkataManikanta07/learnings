import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { STUDENT_API } from "./constant";

const ViewStudent = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState();
  const viewParams = useParams();

  useEffect(() => {
    fetch(STUDENT_API + "/" + viewParams.studentId)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          View Student Details
        </h1>
        {studentData ? (
          <div className="space-y-4">
            {/* Student Details */}
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-gray-600">ID:</span>
              <span className="text-gray-800">{studentData.id}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-gray-600">Name:</span>
              <span className="text-gray-800">{studentData.name}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-gray-600">Place:</span>
              <span className="text-gray-800">{studentData.place}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold text-gray-600">Phone:</span>
              <span className="text-gray-800">{studentData.phone}</span>
            </div>

            {/* Home Button */}
            <div className="text-center">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">Loading student data...</div>
        )}
      </div>
    </div>
  );
};

export default ViewStudent;
