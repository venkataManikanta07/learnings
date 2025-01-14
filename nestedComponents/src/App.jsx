import { useState } from "react";
import CommentList from "./components/CommentList";
import { commentsData } from "../public/commentData";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <h2 className="text-center text-2xl font-bold m-2 p-2">
        Nested Commentes Application
      </h2>
      <CommentList commentsData = {commentsData}/>
    </>
  );
}

export default App;
