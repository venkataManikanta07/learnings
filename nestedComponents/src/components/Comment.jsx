import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="flex items-start space-x-4 p-4 mb-4 bg-gray-100 rounded-lg shadow-sm">
      <img
        className="w-14 h-14 rounded-full border-2 border-blue-500"
        src="data:image/png;base64,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"
        alt="userIcon"
      />
      <div>
        <h3 className="text-lg font-semibold text-blue-700">{data.name}</h3>
        <p className="text-gray-700">{data.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
