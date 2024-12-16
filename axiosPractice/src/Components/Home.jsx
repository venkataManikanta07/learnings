import InputContainer from "./InputContainer";
import DataUi from "./DataUi";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [patchId, setPatchId] = useState(); 
  const [newData, setNewData] = useState({
    title: "",
    body: "",
  });
  const [patchData, newPatchData] = useState({
    title: "",
    body: "",
  });
  return (
    <div className="flex flex-col items-center">
      <InputContainer
        data={data}
        setData={setData}
        newData={newData}
        setNewData={setNewData}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        patchId = {patchId}
        setPatchId={setPatchId}
      />
      <DataUi
        data={data}
        setData={setData}
        newData={newData}
        setNewData={setNewData}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        patchId = {patchId}
        setPatchId = {setPatchId}
      />
    </div>
  );
};

export default Home;
