import InputContainer from "./InputContainer";
import DataUi from "./DataUi";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    title: "",
    body: "",
  });
  console.log("newData ", newData);
  return (
    <div className="flex flex-col items-center">
      <InputContainer data={data} setData={setData} newData={newData} setNewData={setNewData} />
      <DataUi data={data} setData={setData} />
    </div>
  );
};

export default Home;
