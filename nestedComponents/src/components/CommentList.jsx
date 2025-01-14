import React from "react";
import Comment from "./Comment";

const CommentList = ({ commentsData }) => {
  if (!commentsData || commentsData.length === 0) {
    return null;
  }

  return (
    <div>
      {commentsData.map((comment, index) => (
        <div key={index} className="ml-6 border-l-4 border-blue-500 pl-2">
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <CommentList commentsData={comment.replies} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
